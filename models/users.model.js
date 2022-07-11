const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  userName: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  lastUpdated: {type: Date},
  createdDate: {type: Date, default: Date.now},
});


schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    delete ret._id;
    delete ret.hash;
  },
});

exports.Users = mongoose.model('Users', schema);