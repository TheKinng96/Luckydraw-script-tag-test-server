# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a script tag testing environment for a lucky draw widget that integrates with e-commerce platforms. The project consists of two main components:

1. **Main Lucky Draw Script** (`scriptTags.ts`) - The primary widget that displays a spinning wheel on e-commerce sites
2. **Checkout Script** (`checkout/`) - A secondary script that executes on checkout pages for redemption tracking

## Architecture

### Core Components

- **`scriptTags.ts`** - Main TypeScript file containing the lucky draw widget logic
- **`checkout/`** - Contains checkout page scripts for coupon redemption tracking
  - `rawTag.js` - Raw JavaScript for checkout functionality
  - `converted.js` - Processed version via build system
  - `rawCodeConverter.js` - Conversion utility
- **`server.js`** - Express server for local testing (serves on port 5500)
- **`test.html`** - Test page with HMAC signature generation tools
- **`main.js`** - Simple client-side routing for the test environment

### Key Features

The lucky draw widget includes:
- Canvas-based spinning wheel with customizable slices
- Anti-cheat mechanisms (localStorage tracking, server-side validation, max spins limit)
- Form validation for email, name, and phone number
- Progress bar for remaining spins
- Coupon code generation and copy functionality

## Development Commands

### Local Development
```bash
# Start local test server
node server.js
# Server runs on http://localhost:5500
```

### Script Tag Conversion Flow
Based on readme.md, when editing checkout scripts:
1. Edit `checkout/rawTag.js`
2. Run `bun run scriptTagConvert` (external build command)

### Testing
- No specific test framework configured
- Use the local server and test.html for manual testing
- The test page includes HMAC signature generation tools for API testing

## Important Notes

### Integration Points
- When editing `scriptTags.ts`, you should also update `src/lib/components/shared/luckyDraw/LuckyDraw.ts` in the main application
- The script connects to external APIs for campaign settings and conversion tracking
- Uses localStorage key `lucky-draw-executed` for anti-cheat tracking

### External Dependencies
- Connects to external server at `http://localhost:5173/api/` for script tag loading
- API endpoints: `/api/wheel` (campaign settings), `/api/hmac` (authentication keys)
- Requires `PUBLIC_APP_URL` configuration in the raw tag files

### Security Features
- HMAC signature generation for secure API communication
- Anti-cheat mechanisms prevent duplicate usage
- Server-side validation for email and conversion tracking

## File Structure Context

- Root level contains the main testing environment
- `checkout/` subdirectory is for checkout page specific functionality
- TypeScript files are used for the main logic, JavaScript for build outputs
- Express server provides SPA-like routing for testing different page contexts