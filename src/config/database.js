const mongoose = require('mongoose');

//mongoose usando promise do node
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/task');