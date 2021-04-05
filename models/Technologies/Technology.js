const mongoose = require('mongoose');
const Category = require('./Category');

const TechnologySchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title']

  },

  imgUrl: {
    type: String,
    required: [true, 'Please provide an image']
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  
  createdAt: {
    type: Date,
    default: new Date
  }
});

const Technology = mongoose.model('Technology', TechnologySchema);

module.exports = Technology;