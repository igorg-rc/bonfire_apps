const express = require('express');
const router = express.Router();
const {getIndustries, createIndustry , getIndustry, updateIndustry, deleteIndustry} = require('../controllers/industries');
const path = require('path');
const multer = require('multer');
const crypto = require('crypto');

// File upload with multer
const myStorage = multer.diskStorage({
  destination: function(req, res, cb) {
    cb(null, path.join("images/industries"));
  },
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, "img_" + Date.now() + '_' + file.originalname);
    })
  }
});

const fileFilter = (req, res, cb) => {
  const type = file.mimetype;
  if (type === 'image/jpg' || type === 'image/png' || type === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage: myStorage,
  limits: { fileSize: 10000000 },
});

router.get('/', getIndustries);

router.post('/', upload.single('image'), createIndustry);

router.get('/:id', getIndustry);
router.patch('/:id', upload.single('image'), updateIndustry);
router.delete('/:id', deleteIndustry);


module.exports = router;
