const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
	name: String,
	title: String,
	suggestion: String,
	status: {
		type: String,
		default: 'open'
	},
	dateCreated: {
		type: Date,
		default: Date.now()
	}
}, { timestamp: true})

const Idea = mongoose.model('Idea', ideaSchema);
module.exports = Idea;