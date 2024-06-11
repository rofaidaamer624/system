const mongoose = require('mongoose');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const connectDB = require('./server/config/db');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB Atlas using Mongoose
connectDB();

// Express middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      // maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
  })
);
app.use(flash({ sessionKeyName: 'flashMessage' }));
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routers/customer'));

// Handle 404
app.get('*', (req, res) => {
  res.status(404).render('404');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
