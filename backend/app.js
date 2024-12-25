const express = require('express');
const mongoose = require('mongoose');
const pgRoutes = require('./routes/pgRoute'); // Adjust the path based on your folder structure
const app = express();


// Middleware
app.use(express.json());
const cors = require('cors');
app.use(cors());




// Routes
app.use('/api/pg', pgRoutes);

// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/perfectpg'; // Replace 'pg-management' with your database name

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
