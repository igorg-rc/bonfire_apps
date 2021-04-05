const mongoose = require('mongoose');
const path = require('path');
const Technology = require('../models/Technologies/Technology');
const Category = require('../models/Technologies/Category');
const deleteFile = require('../utils/file');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('technologies', 'title imgUrl').select('title _id imgUrl technologies');
    // const categories = await Category.find().populate({ path: 'technologies', select: 'title imgUrl' });
    console.log(categories);
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: `Category with id ${id} not found` });

  try {
    const category = await Category.findById(id).populate({ path: 'technologies', select: 'title imgUrl categoryId'}).select(' -createdAt -__v');
    res.status(200).json({ category });
  } catch (error) {
    res.status(404).json({ message: "Category with requested id is not found" });
  }
};

exports.createCategory = async (req, res) => {
  const title = req.body.title;
  const technologies = req.body.technologies;
  console.log(title);
  const newCategory = new Category(
    { 
      title: title, 
      technologies: technologies 
    }
  );

  try {
    newCategory.save();
    res.status(201).json(newCategory);
    console.log(newCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const title = req.body.title;
  const technologies = req.body.technologies;
  console.log(title);

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Category with id: ${id}` );

  try {
    const updatedCategory = { _id: id, title: title, technologies: technologies };
    await Category.findByIdAndUpdate(id, updatedCategory);
    res.status(200).json({ updatedCategory })
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No category with id: ${id}`);

  try {
    await Category.findByIdAndRemove(id);
    res.status(200).json({message: "Category was successfuly deleted"});
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Category with requested id not found" });
  }
};

exports.getTechnologies = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: `Category with id ${id} not found` });
  }

  try {
    const category = await Category.findById(id).populate('technologies', 'title imgUrl').select('title technologies');
    console.log(category);
    res.status(200).json({ category });
  } catch (error) {
    res.status(404).json({ message: "Category with requested is not found" });
  }
};

exports.getTechnology = async (req, res) => {
  // const category = await Category
  //   .findById(req.params.id)
  //   .populate({path: 'technologies', select: '-createdAt -__v'})
  //   .select('title _id technologies')
  //   .then(category => res.status(200).json(category))
  //   .catch(error => console.log(error));
  const technology = Technology
                        .findById(req.params.techId).select('-createdAt -__v')
                        .then(tech => res.status(200).json(tech))
                        .catch(error => res.status(500).json(error.message));
};

exports.createTechnology = async (req, res) => {
  const id = req.params.id;
  const newTechnology = new Technology({
    title: req.body.title,
    imgUrl: req.file.path,
    categoryId: id
  });
  try {
    await newTechnology.save();
    
    await Category.findByIdAndUpdate(id, {
      $push: {
        technologies: [{
          _id: newTechnology._id
        }]
      }
  });
    res.status(200).send(newTechnology);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTechnology = async (req, res) => {
  const { techId } = req.params;
  const title = req.body.title;
  const imgUrl = req.file.path;

  if (!mongoose.Types.ObjectId.isValid(techId)) return res.status(404).json('Technology with reqested id was not found');

  Technology.findById(techId)
    .then(technology => {
      deleteFile(technology.imgUrl)
    })
    .catch(error => {
      console.log(error);
    });


  try {
    const updatedTechnology = { _id: techId, title, imgUrl };
    await Technology.findByIdAndUpdate(techId, updatedTechnology);
    res.status(200).json(updatedTechnology)
  } catch(error) {
    res.status(500).json(error.message);
  }
  // try {
  //   const updatedTechnology = Technology.findByIdAndUpdate(req.params.techId,  {
  //     title: req.body.title,
  //     imgUrl: req.body.imgUrl
  //   });
  //   res.send.status(200).json(technology);
  // } catch (error) {
  //   res.send.status(500).json(error.message);
  // }
};

exports.deleteTechnology = async (req, res) => {
  const { techId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(techId)) return res.status(404).json('Technology with reqested id was not found');

  Technology.findById(techId)
    .then(technology => {
      deleteFile(technology.imgUrl)
    })
    .catch(error => {
      console.log(error);
    });

  try {
    await Technology.findByIdAndRemove(techId);
    res.status(200).json({ message: `Technology ${techId} was successfuly deleted` });
  } catch (error) {
    res.status(500).json(error.message);
  }

};