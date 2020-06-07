require('dotenv').config({
    path: '../../.env'
});

const path = require('path');
const app = require('./app.ts');

// ** Routes
app.get('/api/ping', (req, res) => {
    res.send('pong');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});
