const express = require('express');
const TempController = require('../controllers/temp.controller');

const tempRouter = express.Router();

tempRouter.get('/all',TempController.getData);
tempRouter.post('/',TempController.addData);

module.exports = tempRouter;