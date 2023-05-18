const express = require('express'); 
const http = require('http'); 

const app = express();

const server = http.createServer(app); 


//endpoints


app.get('/', (req,res)=> {
	console.log('client requested');
	res.json('hello from the server');
});



server.listen(3000, ()=> console.log('server is listening on port 3000'));
