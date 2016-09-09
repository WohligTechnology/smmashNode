var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var uniqueValidator = require('mongoose-unique-validator');
var timestamps = require('mongoose-timestamp');
var validators = require('mongoose-validators');
var monguurl = require('monguurl');
require('mongoose-middleware').initialize(mongoose);

var Schema = mongoose.Schema;

var schema = new Schema({
  name : String,
  age : Number,
  email : {
    type : String,
    validate : validators.isEmail(),
    unique : true
  },
  mobileNumber : {
    type : Number,
    validate : validators.isLength(8,12),
  },
  gender : {
    type : String,
    enum : ["Male","Female","Other"]
  },
  address : String,
  collegeName : String,
  fbIDLink : String,
  friendsOnFb : {
    type : String,
    enum : ["Less than 500","500-1000","1000-2000"]
  },
  twitterHandle : String,
  twitterFollowers : {
    type : String,
    enum : ["Less than 100","100-500","500 & above"]
  },
  instagramHandle : String,
  instagramFollowers : {
    type : String,
    enum : ["Less than 800","800-3000","3000 & above"]
  },
  snapchatId : String,
  snapchatFollowers : {
    type : String,
    enum : ["Less than 200","200-500","500 & above"]
  },
  yourInterests : String,
  achievements : String,
  partOf : String,
  describeYourself : {
    type : String,
    validate : validators.isLength(2,140),
  }
});


schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('UserDetails', schema);
var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
