const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

// adding middlewares
app.use(cors());
app.use(morgan('combined'));
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;
