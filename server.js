const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

// Serve static files from the current directory
// This will handle requests for files like main.js, test.html, etc.
app.use(express.static(__dirname));

// This catch-all middleware must be defined *after* the static middleware.
// It will send test.html for any request that doesn't match a file in the directory.
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'test.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('All non-file routes will serve test.html.');
});
