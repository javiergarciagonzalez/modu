const express = require('express');

const app = new express();

app.get('/', (req, res) => res.send('Hello Mobu!'))

// Listen server
app.listen(3000, () => console.log('🚀Server ready at http://localhost:3000'));