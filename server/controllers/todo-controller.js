const Todo = require('../models/Todo');
let todoController = {};

todoController.createTodo = (req, res) => {
	const todoData = req.body;
	let newTodo = new Todo();

	newTodo.task = todoData.task;
	newTodo.description = todoData.description;

	newTodo.save((err) => {
		if (err) return console.error(err);
		res.status(200);
		res.setHeader('Content-Type', 'application/json');
		return res.send(JSON.stringify(newTodo)).end();
	});
};

todoController.getTodos = (req, res) => {
	Todo.find({}, (err, todos) => {
		if (err) return console.error(err);
		res.status(200);
		res.setHeader('Content-Type', 'application/json');
		return res.send(todos).end();
	})
}

todoController.updateTodo = (req, res) => {
	const todoId = req.params.id;
	Todo.findByIdAndUpdate(todoId, req.body, {new: true}, (err, todo) => {
		if (err) return console.error(err);
		res.status(200);
		res.setHeader('Content-Type', 'application/json');
		return res.send(todo).end();
	})
}

module.exports = todoController;