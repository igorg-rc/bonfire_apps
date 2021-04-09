const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  senderName: {
    type: String, 
    required: true
  },
  senderEmail: {
    type: String,
    required: true
  },
  messageBody: {
    type: String,
    required: true
  }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;