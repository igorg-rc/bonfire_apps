const fs = require('fs');
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
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

exports.updateIndustry = async (req, res) => {
  const { id } = req.params;
  const title = req.body;
  const imgUrl = req.file.path;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No industry with id: ${id}`);

  const updateIndustry = { title, imgUrl, _id: id };

  await Industry.findByIdAndUpdate(id, updateIndustry, { new: true });

  res.json(updateIndustry);
}

exports.deleteIndustry = async (req, res) => {
  const { id } = req.params;
  const image = req.file;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No industry with id: ${id}`);

  // if (!image) {
  //   console.log('There is no image found')
  // } else {
  //   try {
  //     fs.unlink(image);
  //     console.log('Image was successfuly removed from deleted industry');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  Industry.findById(id)
    .then(industry => {
      deleteFile(industry.imgUrl)
    })
    .catch(error => {
      console.log(error);
    }) 

  await Industry.findByIdAndRemove(id);
  
  // try {
  //   if (imgUrl) {
  //     fs.unlink(imgUrl);
  //     console.log("File from deleted industry was successfuly removed");
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  res.json({ message: "Industry deleted successfully." });
}
