const http = require('http'); 
const {upperCase} = require('upper-case');
const fs = require('fs');

const server = http.createServer( (req,res) => {


	const value = upperCase('hello from the node js server');

	const html  = `<h1>  ${value} </h1>`;
	fs.readFile('index.html', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		//now writing the headers 
		const headers = {
			'Content-type' : 'text/html'
		} 
		res.writeHead(200,headers); 
		res.write(data); 
		res.end(); 

	});

});

server.listen(3000, () => {
	console.log('server running on port 3000')
}); 
