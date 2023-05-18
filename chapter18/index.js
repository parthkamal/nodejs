const express = require('express');
const http = require('http');

const app = express();

const server = http.createServer(app);

const router = require('./routes');


app.use(router);




server.listen(3000, () => console.log('server is listening at port 3000'));
