const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Specifications = new Schema({
  specs: {type: String},
  model: {type: String}
})

const assetDetails = new Schema({
    moveableAsset: {type:Boolean, required: true},
    uniqueID: {type: String, unique: true, requires:true},
    purchaseDate: {type: Date, required: true},
    warrantyPeriod: {type: String, required: true},
    warrantyExpiredOn: {type: Date, required: true},
    specifications: {type: Specifications, required: true}
})

const schema = new Schema({
  assetFamily: {type: String, required: true},
  assetCategory: {type: String, required: true},
  assetType: {type: String, required: true},
  assetDetails: {type: assetDetails, required: true},
  department: {type: String, required: true},
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

exports.Assets = mongoose.model('Assets', schema);