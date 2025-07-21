// main.js

function handleRouting() {
    const path = window.location.pathname;
    console.log('Current path:', path);

    const contentDiv = document.getElementById('content');
    if (!contentDiv) {
        console.error('Could not find element with id "content"');
        return;
    }

    // Simple routing logic
    if (path.includes('/cart')) {
        contentDiv.innerHTML = '<h1>Cart Page</h1><p>This is the shopping cart.</p>';
    } else if (path.includes('/profile')) {
        contentDiv.innerHTML = '<h1>Profile Page</h1><p>This is the user profile.</p>';
    } else {
        contentDiv.innerHTML = '<h1>Home Page</h1><p>Welcome to the main page.</p>';
    }
}

// Handle routing on initial page load
window.addEventListener('load', handleRouting);

// Handle routing when the URL changes (e.g., through history.pushState)
window.addEventListener('popstate', handleRouting);
