const path = require('path');
const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

const app = new express();

// app.use('/api', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

if (process.env.BUILD_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/dist')));
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(express.json()); //Used to parse JSON bodies

app.get('/api/ping', (req, res) => {res.send('pong')} )

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname,  '../../public/index.html'));
});


// Listen server
app.listen(3000, () => console.log('🚀Server ready at http://localhost:3000'));
