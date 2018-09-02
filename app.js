const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const dotenv = require('dotenv');
const debug = require('debug')('app');
const sql = require('mssql');
const Raven = require('raven');
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env.example' });

// Must configure Raven before doing anything else with it
Raven.config('http://be9f4ddbc47f4a3fb50f73e0c8c02b1e@207.154.219.104/3')
  .install();

const config = {
  user: 'sa',
  password: 'xoho@123',
  server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
  database: 'NodeLibrary',

  options: {
    encrypt: true // Use this if you're on Windows Azure
  }
};
/**
 * Set NavBar Menus and Links
 */
const nav = [{
  link: '/books',
  title: 'Books'
}, {
  link: '/authors',
  title: 'Authors'
}, {
  link: '/issues',
  title: 'Issues',
}];

sql.connect(config)
  .catch(err => (debug(err)));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const issuesRouter = require('./routes/issueRoutes')(nav);
const booksRouter = require('./routes/bookRoutes')(nav);

const app = express();

// The request handler must be the first middleware on the app
app.use(Raven.requestHandler());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  outputStyle: 'compressed',
  debug: true,
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true,
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/jquery/dist'), { maxAge: 31557600000 }));
app.use('/webfonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'), { maxAge: 31557600000 }));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/issues', issuesRouter);
app.use('/issues/single', issuesRouter);

// The error handler must be before any other error middleware
app.use(Raven.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
