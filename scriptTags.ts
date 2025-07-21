import { createHash } from 'crypto';
import { rawCode } from './converted.js';

/**
 * Generates a SRI hash for a file
 * @param buffer - The buffer to hash
 * @returns The SRI hash
 */
export async function generateFileSRIHash(buffer: Buffer) {
  const hash = createHash('sha384').update(buffer).digest('base64');
  return `sha384-${hash}`;
}

export function getScriptContent() {
  return rawCode;
}
