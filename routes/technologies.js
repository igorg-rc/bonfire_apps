const express = require('express');
const router = express.Router();
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

const { 
  getCategories, 
  getCategory, 
  createCategory,   
  updateCategory,
  deleteCategory,
  getTechnologies,
  getTechnology,
  createTechnology,
  updateTechnology,
  deleteTechnology
  } = require('../controllers/technologies');

const myStorage = multer.diskStorage({
  destination: function(req, res, cb) {
    cb(null, path.join("images/technologies"));
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
};

const upload = multer({
  storage: myStorage,
  limits: { fileSize: 10000000 },
});

// router.post('/tech', upload.single('image'), createTechnology);
// router.patch('/tech:id', upload.single('image'), updateTechnology);
// router.delete('/tech:id', deleteTechnology);


router.get('/categories', getCategories);
router.get('/categories/:id', getCategory);
router.post('/categories/', createCategory);
router.patch('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

router.get('/categories/:id/tech/', getTechnologies);
router.get('/categories/:id/tech/:techId', getTechnology);
router.post('/categories/:id/', upload.single('image'), createTechnology);
router.patch('/categories/:id/tech/:techId', upload.single('image'), updateTechnology);
router.delete('/categories/:id/tech/:techId', deleteTechnology);

module.exports = router;