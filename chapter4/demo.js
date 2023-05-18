const http = require('http');
const resObject = [1,2,3,3,4] // javascript list

const server  = http.createServer((req,res) => {
	res.write( JSON.stringify(resObject));
	res.end();
}
); 


server.listen(3000, ()=>{
	console.log('server is listening at port 3000');
});
