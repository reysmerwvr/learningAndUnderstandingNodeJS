var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<html><head></head><body><h1>Hello world!</h1></body><html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'Reysmer', lastname: 'Valle' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));