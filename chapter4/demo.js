const http = require('http');

const server  = http.createServer((req,res) => {
	res.write("hello from the nodejs server")
	res.end();
}
); 


server.listen(3000, ()=>{
	console.log('server is listening at port 3000');
});
