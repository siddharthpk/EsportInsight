import dotenv from 'dotenv';
dotenv.config();

import axios from "axios";
import express from "express";

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route for home to test server
app.get('/', (req, res) => {
  res.send('Welcome to EsportInsight API');
});

// Route to fetch live matches data from PandaScore
app.get('/api/livematches', async (req, res) => {
  try {
    const response = await axios.get(`https://api.pandascore.co/lol/matches/running`, {
      headers: {
        'Authorization': `Bearer ${process.env.PANDASCORE_API_KEY}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching live matches: ${error}`);
    res.status(500).send('Failed to fetch live matches');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});