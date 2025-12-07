const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.set('view engine', 'ejs');

// Keep-alive endpoint for Render - MUST COME BEFORE '*'
app.get('/ping', (req, res) => {
    res.status(200).send('OK');
});

// Health check endpoint for UptimeRobot - MUST COME BEFORE '*'
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        version: process.version
    });
});

// Home route - MUST COME BEFORE '*'
app.get('/', (req, res) => {
    res.render('home');
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});