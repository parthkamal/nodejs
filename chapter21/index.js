const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const router = require('./routes');

app.use('/',router);

//allow the json and html form url encoded 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://kamalparth40:lo26iezAOLDQpBp8@cluster0.q4po6dt.mongodb.net/?retryWrites=true&w=majority').then(()=>{
	console.log('connected to database');
}).catch((error)=> {
	console.log(error);
});


server.listen(3000,()=> console.log('server listening on port 3000'));
