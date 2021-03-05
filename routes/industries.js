const express = require('express');
const router = express.Router();
const {getIndustries, createIndustry} = require('../controllers/industries')

router.get('/', getIndustries);
router.post('/', createIndustry);

module.exports = router;
