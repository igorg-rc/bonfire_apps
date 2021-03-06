require('dotenv').config('.env');

const createError = require('http-errors');
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/error');
const multer = require('multer');

// connect db
connectDB();

// File upload with multer
// const storage = multer.diskStorage({
//   destination: "images/industries",
//   filename: function(req, file, cb) {
//     cb(null, "img_" + Date.now() + '_' + file.originalname);
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
// }).single("myImage");


const app = express();
app.use(cors());
app.use(logger('dev'));

// app.use(multer({ dest: 'images/industries', storage: storage }).single("image"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname,'images')));
app.use('/industries', express.static(path.join(__dirname,'images', 'industries')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));
app.use('/api/industries', require('./routes/industries'));

// Error Handler (Should be last piece of middleware)
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up assets
  app.use(express.static('client-admin/build'));

  // Express will server index.html file if it doesn't recognize the route
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-admin', 'build', 'index.html'));
  });
}


app.use(function(req, res, next) {
  res.redirect('/');
});


app.listen(process.env.PORT, function() {
  console.log('Server is running on port 9000')
});
