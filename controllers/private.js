exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
    success:true,
    data: "You've got access to the private data in this route"
  });
};