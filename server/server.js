// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoController = require('./controllers/todo-controller');
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

app.get('/api/todos', todoController.getTodos);
app.post('/api/todos', todoController.createTodo);
app.put('/api/todo/:id', todoController.updateTodo);

app.listen(PORT, () => {
	console.log('listening port 3000..')
});