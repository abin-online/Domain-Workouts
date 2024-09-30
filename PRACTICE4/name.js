const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.json(req.query.name);
});

app.listen(3003, () => {
    console.log('Connected');
});
