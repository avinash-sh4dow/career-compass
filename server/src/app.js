const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./configs/db.config');
const dotenv = require('dotenv');
const tempRouter = require('./api/routes/temp.routes');

dotenv.config();

const app = express();

// settings
app.set('view engine', 'ejs');
app.set('views', './views');

// db connection
db();

// adding middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.static('./public'));


app.use('/api/temp',tempRouter);

module.exports = app;
