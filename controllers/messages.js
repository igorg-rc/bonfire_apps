const Message = require('../models/Message');
const { validationResult } = require('express-validator');

exports.getMessages = async (req, res) => {
  const messages = await Message.find()

  try {
    if (!messages) {
      res.status(404).json({ message: 'Messages were not find' })
    }
    res.status(200).json(messages)

  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
};

exports.postMessage = async (req, res) => {
  try {
    console.log('Message', req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid data in message fields.'
      });
    }

    const { senderName, senderEmail, messageBody } = req.body;

    const message = new Message({ senderName, senderEmail, messageBody });
    await message.save();
    res.status(201).json({ message: 'Message was successfully saved.' })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error. Message has not been saved.' })
  }
}