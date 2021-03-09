const Industry = require('../models/Industry');
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




exports.getIndustries = async (req, res) => {
  try {
    const industries = await Industry.find();
    console.log(industries);
    res.status(200).json(industries);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

exports.createIndustry = async (req, res) => {
  const industryBody = req.body;
  const newIndustry = new Industry(industryBody);

  try {
    newIndustry.save();
    res.status(201).json(newIndustry);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}