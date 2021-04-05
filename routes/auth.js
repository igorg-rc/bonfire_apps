const express = require('express');
const router = express.Router();

const { register, login, forgot_password, reset_password } = require('../controllers/auth');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/forgot-password').post(forgot_password);
router.route('/reset-password/:resetToken').put(reset_password);

module.exports = router;