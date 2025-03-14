const mongoose = require('mongoose');

const TempSchema = mongoose.Schema({
    product: { required: true, type: String },
    quantity: { required: true, type: Number }
});

const TempModel = mongoose.model('Temp',TempSchema);

module.exports = TempModel;