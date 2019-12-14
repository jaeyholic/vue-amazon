const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = Schema({
  type: {
    type: String,
    unique: true,
    require: true
  }
});

module.exports = mongoose.model('Category', CategorySchema);
