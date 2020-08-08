const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3600;
const app = express();
const Idea = require('./models/ideas')

//Middleware
app.use(express.urlencoded( { extended: true }))
app.use(express.static('public'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb+srv://Ideafordev:ideafordev@ideafordev.tdudz.mongodb.net/ideafordev?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});


app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

app.post('/ideas', async (req, res) => {
	await Idea.create(req.body);
	console.log(req.body);
	res.redirect('ideas');
});

app.get('/admin', async (req, res) => {
	const response = await Idea.find({});
		res.render('admin', { ideas: response });
});

app.get('/', (req, res) => {
		res.render('index')
});

app.get('/ideas', async (req, res) => {
	const response = await Idea.find({});
		res.render('ideas', { ideas: response });
});

app.get('/close/:id', async (req, res) => {
	var id = req.params.id;
	const idea = await Idea.findByIdAndUpdate(id, { status: 'closed'}
	)
	const response = await Idea.find({});
		res.render('ideas', {ideas: response})
})

app.get('/delete/:id', async (req, res) => {
	var id = req.params.id;
	const idea = await Idea.findByIdAndDelete(id)
	const response = await Idea.find({});
		res.render('ideas', {ideas: response})
})

app.listen(port, () => { console.log('Listening on port ' + port)});