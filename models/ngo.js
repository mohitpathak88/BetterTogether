const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ngoSchema = new Schema({

     name2: {
       type: String,
       required:true
     },
     email2:{
      type: String,
      required:true,
      unique: true
    },
     password2:{
      type: String,
      required:true
    },         
     phone_number1: {
      type: String,
      required:true,
      unique: true
    },
     phone_number2:{
      type: String
    },
     address: {
      type: String,
      required:true
    },
     city: {
      type: String,
      required:true
    },
     state: {
      type: String,
      required:true
    },
     pincode: {
      type: String,
      required:true
    },
     requirement: {
       type: String
     },
     details : {
      type: String
    }

});

const User1 = mongoose.model('Ngo', ngoSchema);
module.exports = User1;