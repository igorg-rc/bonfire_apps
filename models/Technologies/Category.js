const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  title: {
    type: String, 
    required: [true, 'Please provide a title' ]
  },

  // technologies: [{
  //   title: { type: String },
  //   imgUrl: { type: String }
  // }],

  technologies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Technology"
  }],
  
  createdAt: {
    type: Date,
    default: new Date
  }
});

// CategorySchema.virtual('technologies', {
//   ref: 'Technology',
//   localField: '_id',
//   foreignField: 'category'
// });

// CategorySchema.set('toObject', { virtuals: true });
// CategorySchema.set('toJSON', { virtuals: true });

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;