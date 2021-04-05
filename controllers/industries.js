const mongoose = require('mongoose');
const path = require('path');
const Industry = require('../models/Industry');
const deleteFile = require('../utils/file');


exports.getIndustries = async (req, res) => {
  try {
    const industries = await Industry.find();
    console.log(industries);
    res.status(200).json(industries);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

exports.getIndustry = async (req, res) => { 
  const { id } = req.params;

  try {
      const industry = await Industry.findById(id);
      
      res.status(200).json(industry);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

exports.createIndustry = async (req, res) => {
  const title = req.body.title;
  const imgUrl = req.file.path;
  console.log(req.file.path);
  console.log(req.body.title);
  const newIndustry = new Industry({
    title, imgUrl
  });

  try {
    newIndustry.save();
    res.status(201).json(newIndustry);
    console.log(newIndustry);
  } catch (error) {
    res.status(409).json({ message: error.message });

  }
}

exports.updateIndustry = async (req, res) => {
  const { id } = req.params;
  const title = req.body.title;
  const imgUrl = req.file.path;
  console.log(title);
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No industry with id: ${id}`);

  Industry.findById(id)
    .then(industry => {
      if (imgUrl) {
        deleteFile(industry.imgUrl)
      }
    })
    .catch(error => {
      console.log(error);
    }) 

  

  try {
    const updatedIndustry = { _id: id, title, imgUrl};
    await Industry.findByIdAndUpdate(id, updatedIndustry);
    res.json(updatedIndustry);
    console.log(updatedIndustry);
  } catch (error) {
    console.log(error);
  }
  
}

exports.deleteIndustry = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No industry with id: ${id}`);

  Industry.findById(id)
    .then(industry => {
      deleteFile(industry.imgUrl)
    })
    .catch(error => {
      console.log(error);
    }) 

  await Industry.findByIdAndRemove(id);
 
  res.json({ message: "Industry deleted successfully." });
}
