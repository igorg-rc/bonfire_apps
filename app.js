require('dotenv').config('.env');

const createError = require('http-errors');
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/error');
const { dirname } = require('path');

// connect db
connectDB();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()) // for parsing application/json
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));


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



// app.use(express.static(path.join(__dirname, './client-admin', 'build')));
// app.use('/', function(req, res) {
//   res.sendFile(path.join(__dirname, './client-admin', 'build', 'index.html'));
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.redirect('/');
});

// error handler
// app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
// });

app.listen(process.env.PORT, function() {
  console.log('Server is running on port 9000')
});
