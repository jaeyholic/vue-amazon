const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required to signup!']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required to signup!']
  },
  password: {
    type: String,
    required: [true, 'Password is required to signup!']
  },
  address: { type: Schema.Types.ObjectId, ref: 'Address' }
});

module.exports = mongoose.model('User', UserSchema);
