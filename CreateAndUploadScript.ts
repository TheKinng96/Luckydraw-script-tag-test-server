import path from 'path';
import { writeFile, readFile, mkdir, unlink } from 'node:fs/promises';
import type { LoginResponse } from '$lib/types/response.types';
import { generateFileSRIHash, getScriptContent } from './scriptTags';
import { getScriptContent as getCheckoutScriptContent } from './checkout'
import { S3Service } from '../S3Service';
import { S3_BUCKET_NAME, S3_REGION } from '$env/static/private';
import { ColormeScriptTagRequest } from '../Colorme.api';
import { minify } from 'uglify-js';
import { ScriptTagsScopeOptions } from '$lib/types/pocketbase-types';

export interface ScriptUploadOptions {
  user: LoginResponse
  tagId?: string
  scope?: ScriptTagsScopeOptions
}

export interface ScriptUploadResult {
  hash: string;
  src: string;
  colormeTagId: string;
}

/**
 * Creates a JavaScript file from the provided content, writes it to a temporary location,
 * uploads it to S3, and then uses the Colorme service to set the script.
 *
 * @param {ScriptUploadOptions} options - The configuration and service dependencies.
 * @returns {Promise<ScriptUploadResult>} - Resolves with the generated script hash (SRI) and file URL on success.
 * @throws Will throw an error if any step in the process fails.
 */
export async function createAndUploadScript(options: ScriptUploadOptions): Promise<ScriptUploadResult> {
  const {
    user,
    tagId,
    scope = ScriptTagsScopeOptions.shop
  } = options;

  const fileName = `${user.id}${scope === ScriptTagsScopeOptions.shop ? '' : '-checkout'}.js`;

  const tempFilePath = path.join(process.cwd(), 'static', 'scriptTags', fileName);

  try {
    // Get the script content and minify it
    const scriptContent = scope === ScriptTagsScopeOptions.shop ? getScriptContent() : getCheckoutScriptContent()
    const minifiedContent = minify(scriptContent, {
      compress: {
        drop_console: false, // Keep console.log statements for debugging
        drop_debugger: true,
        pure_funcs: ['console.debug', 'console.info'] // Remove debug and info logs
      },
      mangle: true,
      output: {
        beautify: false
      }
    });

    if (minifiedContent.error) {
      console.error('Error minifying script:', minifiedContent.error);
      throw new Error('Error minifying script');
    }

    // Ensure the directory exists
    await mkdir(path.dirname(tempFilePath), { recursive: true });

    // Write the minified content to the temporary file
    await writeFile(tempFilePath, minifiedContent.code, 'utf8');
  } catch (err) {
    console.error('Error writing temporary file:', err);
    throw new Error('Error creating file');
  }

  let fileBuffer: Buffer;
  try {
    fileBuffer = await readFile(tempFilePath);
  } catch (err) {
    console.error('Error reading temporary file:', err);
    throw new Error('Error reading created file');
  }

  try {
    const s3Service = new S3Service();
    await s3Service.uploadFile(fileName, fileBuffer);
  } catch (err) {
    console.error('Error uploading file:', err, user.id);
    throw new Error('Error uploading file');
  }

  const accessToken = user.expand?.authProviders_via_userId?.[0]?.accessToken;
  if (!accessToken) {
    throw new Error('Error getting access token');
  }

  let hash: string;
  let fileUrl: string;
  let colormeTagId: string;
  try {
    hash = await generateFileSRIHash(fileBuffer);

    fileUrl = `https://${S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com/${fileName}`;

    const colormeService = new ColormeScriptTagRequest(accessToken);

    if (tagId) {
      colormeTagId = await colormeService.updateScript({ tagId, hash, src: fileUrl, destination: scope });
    } else {
      colormeTagId = await colormeService.setScript({ hash, src: fileUrl, destination: scope });
    }
  } catch (err) {
    console.error('Error in Colorme service processing:', err);
    throw new Error('Error processing Colorme service');
  } finally {
    try {
      await unlink(tempFilePath);
    } catch (cleanupErr) {
      console.error('Error deleting temporary file:', cleanupErr);
    }
  }

  return { hash, src: fileUrl, colormeTagId };
}
