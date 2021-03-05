const Industry = require('../models/Industry');

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