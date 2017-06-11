const express = require('express')
var path = require('path');
const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hack site!</h1>')
})

app.use(express.static(path.join(__dirname, 'public-attack')));

var PORT = 3000;
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
})