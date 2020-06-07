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
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀Server ready at http://localhost:${port}`));

module.exports = app;
