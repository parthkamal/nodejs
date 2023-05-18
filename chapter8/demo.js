const http = require('http'); 

const server = http.createServer( (req,res) => {
	const html  = '<h1> hello from the server side </h1>';

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
