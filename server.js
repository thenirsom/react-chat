const http = require('http');
const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.send({ express: 'Hello From Express' })
})


const server = http.createServer(app);
server.listen(8080);