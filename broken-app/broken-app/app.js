const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

const GITHUB_API_BASE_URL = 'https://api.github.com/users';

// Helper function to fetch user info
async function fetchDeveloperInfo(username) {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/${username}`);
    return { name: response.data.name, bio: response.data.bio };
  } catch (error) {
    // Return a placeholder for users that fail
    return { name: username, bio: 'Unable to fetch user information' };
  }
}

// Main route to process developer info
app.post('/', async (req, res, next) => {
  try {
    const { developers } = req.body;

    if (!developers || !Array.isArray(developers)) {
      return res.status(400).json({ error: 'Invalid input. Expecting {developers: [username, ...]}' });
    }

    // Fetch information for all developers concurrently
    const developerInfo = await Promise.all(developers.map(fetchDeveloperInfo));

    return res.json(developerInfo);
  } catch (err) {
    next(err); // Pass error to Express error handler
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'An internal server error occurred.' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
