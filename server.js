import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json()); // Add this to parse JSON request bodies

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(200);
});

// Add your API routes here
app.post('/api/members', (req, res) => {
  console.log('Received member data:', req.body);
  // Process the data and save to database
  res.status(201).json({ message: 'Member created successfully' });
});

app.listen(8086, () => {
  console.log('Server running on port 8086');
});