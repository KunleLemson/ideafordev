const mongoose = require('mongoose');
const blogPost = require('./models/ideas');
mongoose.connect('mongodb://localhost:27017/ideafordev', {useNewUrlParser: true});

/*let id = '5f281194f7a0f633139751f6'

blogPost.findByIdAndDelete(id, (error) => {
	console.log(error)
})*/

blogPost.find({}, (error, blogpost) => console.log(error, blogpost));
