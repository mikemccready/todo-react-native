const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
	task: {type: String, required: true},
	completed: {type: Boolean, default: false},
	created_at: {type: Date, required: true, default: Date.now},
	description: {type: String}
});

module.exports = mongoose.model('Todo', todoSchema);