const mongoose = require('mongoose');

const industrySchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    default: 'New industry'
  },
  imgUrl: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const Industry = mongoose.model('Industry', industrySchema);
module.exports = Industry;