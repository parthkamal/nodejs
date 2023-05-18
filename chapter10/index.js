const http = require('http'); 
const {upperCase} = require('upper-case');
const nodeMailer = require('node-mailer');

const server = http.createServer( (req,res) => {
	

	const value = upperCase('hello from the node js server');

	const html  = `<h1>  ${value} </h1>`;

	//now writing the headers 
	const headers = {
		'Content-type' : 'text/html'
	} 
	res.writeHead(200,headers); 
	res.write(html); 
	res.end(); 

});

server.listen(3000, () => {
	console.log('server running on port 3000')
}); 
