const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);

mongoose.connect('mongodb+srv://kamalparth40:lo26iezAOLDQpBp8@cluster0.q4po6dt.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected to database');
}).catch((error)=> {
    console.log(error);
});


app.get('/',(request, response) => {

   response.setHeader('Content-Type', 'application/json');
   const message = "hello from the mongodb server side"
   response.json( {message});
})



server.listen(3000,()=> console.log('server listening on port 3000'));
