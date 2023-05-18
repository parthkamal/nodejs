const express = require('express'); 
const http = require('http'); 

const app = express();

const server = http.createServer(app); 

// GET request handler for the root URL
app.get('/', (req, res) => {
	res.send('Hello, Express!');
});

// POST request handler for the '/users' URL
app.post('/users', (req, res) => {
	// Handle creating a new user
	res.send('User created!');
});

// PUT request handler for the '/users/:id' URL
app.put('/users/:id', (req, res) => {
	const userId = req.params.id;
	// Handle updating the user with the given ID
	res.send(`User ${userId} updated!`);
});

// DELETE request handler for the '/users/:id' URL
app.delete('/users/:id', (req, res) => {
	const userId = req.params.id;
	// Handle deleting the user with the given ID
	res.send(`User ${userId} deleted!`);
});


server.listen(3000, ()=> console.log('server is listening on port 3000'));
