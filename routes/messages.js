const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Message = require('../models/Message');

router.get('/', async (req, res) => {
  const messages = await Message.find()

  try {
    if (!messages) {
      res.status(404).json({ message: 'Messages were not find' })
    }
    res.status(200).json(messages)

  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
});

router.post('/', 
  [
    check('senderName', 'Name must to be at least 10 characters in length').isLength({ min: 10 }),
    check('senderEmail', 'Wrong email format').isEmail(),
    check('messageBody', 'Message must to be at least 20 characters in length').isLength({ min: 20 })
  ],

  async (req, res) => {
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
});

module.exports = router;