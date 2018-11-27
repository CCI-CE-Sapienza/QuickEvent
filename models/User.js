const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  id:                     { type: String, required: true },
  facebook_access_token:  { type: String, required: false },	
  google_ac_token:        { type: String, required: false },
  firstName:              { type: String, required: true },
  lastName:               { type: String, required: true },
  email:                  { type: String, required: true },
  password:               { type: String, required: true },
  date:                   { type: Date, default: Date.now }
  //add other parameters
});

mongoose.model('users', UserSchema);
