const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getMessages, postMessage } = require('../controllers/messages');

router.get('/', getMessages);

router.post('/', 
  [
    check('senderName', 'Name must to be at least 10 characters in length').isLength({ min: 10 }),
    check('senderEmail', 'Wrong email format').isEmail(),
    check('messageBody', 'Message must to be at least 20 characters in length').isLength({ min: 20 })
  ],

  postMessage
);

module.exports = router;