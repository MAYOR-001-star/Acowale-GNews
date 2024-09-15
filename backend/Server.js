const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();

app.use(cors()); // Enable CORS for all routes

const PORT = 5001; // Updated port number to avoid conflicts

// Endpoint to fetch news from GNews API
app.get('/news', async (req, res) => {
  const apiKey = process.env.GNEWS_API_KEY; // Retrieve API key from environment variables

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data); // Send news data to frontend
  } catch (error) {
    console.error('Error fetching news data:', error.message); // Log error message
    res.status(500).json({ error: 'Error fetching news data' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
