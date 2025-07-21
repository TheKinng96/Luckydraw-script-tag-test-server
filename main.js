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
    const routes = {
        '/cart': '<h1>Cart Page</h1><p>This is the shopping cart.</p>',
        '/profile': '<h1>Profile Page</h1><p>This is the user profile.</p>',
        '/products': '<h1>Products Page</h1><p>This is the product list.</p>',
        '/': '<h1>Home Page</h1><p>Welcome to the main page.</p>',
    };

    const content = routes[path] || `<h1>${path} Page</h1><p>You are currently on ${path}</p>`;
    contentDiv.innerHTML = content;
}

// Handle routing on initial page load
window.addEventListener('load', handleRouting);

// Handle routing when the URL changes (e.g., through history.pushState)
window.addEventListener('popstate', handleRouting);
