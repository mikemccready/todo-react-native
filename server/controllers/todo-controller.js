const Todo = require('../models/Todo');
let todoController = {};

todoController.createTodo = (req, res) => {
	const todoData = req.body;
	let newTodo = new Todo();

	newTodo.task = todoData.task;
	newTodo.description = todoData.description;

	newTodo.save((err) => {
		if(err) return console.error(err);
		res.status(200);
		res.setHeader('Content-Type', 'application/json');
		return res.send(JSON.stringify(newTodo)).end();
	});
};

module.exports = todoController;