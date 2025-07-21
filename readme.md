# Reminder

When editing the scriptTags.ts, should update the src/lib/components/shared/luckyDraw/LuckyDraw.ts

# EDIT FLOW

1. Edit rawTag.js
2. Run `bun run scriptTagConvert`

# Lucky Draw Script Tag Overview

## Script Flow

1. **Initialization**

   - Check if script has already been executed within a week (localStorage check)
     - KEY: `lucky-draw-executed`
   - Load CSS styles for the lucky draw UI
   - Create wheel component with canvas

2. **Main Flow**

   - Fetch campaign settings from API
     - `api/wheel?shop-id={colorme shop id}`
     - return campaign as null to not showing any lucky draw
     - anti-cheat limitBy ipAddress will block the lucky draw loading here
   - Append lucky draw UI to the page
   - Initialize form validation
   - Handle spin button click
     - Will call the conversion endpoint to check if anti-cheat limitBy email will block same email to get the coupon code
   - Process winner and update UI

3. **Anti-Cheat Mechanisms**
   - **Local Storage Tracking**: Prevents multiple spins within a week
   - **Server-Side Validation**: Validates user data and prevents duplicate entries
   - **Max Spins Limit**: Tracks total conversions and limits spins based on campaign settings
   - **Progress Bar**: Visual indicator of remaining spins (if enabled)

## Component Structure

### 1. Wheel Component

- Canvas-based wheel visualization
- Slice rendering with colors and labels
- Spin animation with easing function
- Winner determination logic

### 2. Form Components

- **Before Spin Form**:

  - Email input (optional)
  - Name input (optional)
  - Phone number input with country code selector (optional)
  - Consent checkbox
  - Progress bar (if anti-cheat enabled)
  - Spin button with loading state

- **Winner Form**:
  - Winning message
  - Coupon code display
  - Copy button
  - Continue button

### 3. Anti-Cheat Settings

- **Max Spins Limit**:

  - Tracks total conversions
  - Shows remaining spins or fixed value
  - Optional count display
  - Optional CTA text

- **Display Options**:
  - Remaining spins count
  - Fixed value display
  - Percentage format option

## Key Functions

1. **`runLuckyDraw(shopId)`**: Main entry point

   - Fetches campaign settings
   - Initializes lucky draw UI

2. **`createWheel({canvas, theme, slices, displayStyle})`**: Creates wheel visualization

   - Renders wheel slices
   - Handles spin animation
   - Returns spin function

3. **`appendLuckyDraw({theme, slices, antiCheat, formSettings, displayStyle, colors, text, totalConversions, phoneCountryCodes, campaignId})`**: Builds UI

   - Creates form elements
   - Sets up event listeners
   - Handles form validation
   - Manages spin button state

4. **`validateForm(state)`**: Form validation

   - Validates email format
   - Validates name
   - Validates phone number
   - Checks consent

5. **`getWeightedRandomIndex(slices)`**: Winner determination

   - Uses probability weights from slices
   - Returns index of winning slice

6. **`replaceFormContent(winningIndex)`**: Updates UI after win
   - Replaces form with winner display
   - Sets up copy and continue buttons

## Anti-Cheat Implementation Details

1. **Local Storage Check**:

   ```javascript
   if (
   	localStorage.getItem(localStorageKey) &&
   	new Date(localStorage.getItem(localStorageKey)) >
   		new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
   ) {
   	skip = true
   }
   ```

2. **Max Spins Progress Bar**:

   ```javascript
   if (antiCheat.enabledMaxSpins) {
   	// Create progress bar container
   	// Calculate progress value based on settings
   	// Display progress bar with optional count and CTA
   }
   ```

3. **Server-Side Validation**:

   ```javascript
   // Send request to server
   const response = await fetch('${PUBLIC_APP_URL}/api/wheel', {
   	method: 'POST',
   	// ...
   	body: JSON.stringify({
   		...formState,
   		couponCode: slices[winnerIndex].couponCode,
   		sliceId: slices[winnerIndex].id,
   		campaignId,
   	}),
   })

   // Check for errors (e.g., duplicate email)
   if (data.error) {
   	addErrorToEmailFields({ errorContent: data.error })
   	// ...
   }
   ```

## Debugging Tips

1. **Console Logs**: Key points have console.log statements
2. **Error Handling**: Try/catch blocks with error logging
3. **Form Validation**: Visual indicators for validation errors
4. **Loading States**: Button state changes during API calls

## Common Issues to Watch For

1. **Email Validation**: Server may reject duplicate emails
2. **Phone Number Formatting**: International format handling
3. **Anti-Cheat Limits**: Max spins may be reached
4. **Local Storage**: Browser privacy settings may block storage
# Luckydraw-script-tag-test-server
