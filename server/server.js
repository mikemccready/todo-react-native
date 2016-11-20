// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/todosDB', (err) => {
	if(err) return console.error(err);
	console.log('connect to mongoDB');
});

app.use(bodyParser.json());
app.use(express.static('client'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + './../index.html'));
});

app.get('/api/todos', (req, res) => {
	res.send({task: 'myTodos'})
});

app.post('/api/todos', (req, res) => {
	console.log(req.body)
});

app.listen(PORT, () => {
	console.log('listening port 3000..')
});