const express = require('express');
const router = express.Router();
const {getIndustries, createIndustry} = require('../controllers/industries');
const path = require('path');
const multer = require('multer');

// File upload with multer
const storage = multer.diskStorage({
  destination: "public/uploads/img/",
  filename: function(req, file, cb) {
    cb(null, "img-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("myImage");



router.get('/', getIndustries);
router.post('/', createIndustry);


module.exports = router;
