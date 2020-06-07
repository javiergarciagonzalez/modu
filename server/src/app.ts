const path = require('path');
const Express = require('express');

const app = new Express();

if (process.env.BUILD_ENV === 'production') {
    app.use(Express.static(path.join(__dirname, '../../client/dist')));
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(Express.json()); // Used to parse JSON bodies

// Listen server
// eslint-disable-next-line
app.listen(3000, () => console.log('🚀Server ready at http://localhost:3000'));

module.exports = app;
