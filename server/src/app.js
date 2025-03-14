const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./configs/db.config');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// settings
app.set('view engine', 'ejs');
app.set('views', './views');

// db connection
db();

// adding middlewares
app.use(cors());
app.use(morgan('combined'));
app.use(express.static('./public'));

// routes
app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;
