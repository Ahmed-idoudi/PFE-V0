require('dotenv').config();
const express = require('express');
const cors = require('cors');
const trainRoutes = require('./routes/trainRoutes');
const gpsService = require('./services/gpsService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', trainRoutes);

// Base route
app.get('/', (req, res) => {
    res.send('Train Tracker API running');
});

// Start listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // Start background GPS service
    gpsService.startService();
});
