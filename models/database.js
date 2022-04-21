const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating a Schema:

const userSchema = new Schema({
    studentInfo : {
     name: String,
     email: String,
     password: String,
      },
    ngoInfo : {
     name2: String,
     email2: String,
     password2: String,         //Cut '2'
     phone_number1: String,
     phone_number2: String,
     address: String,
     city: String,
     state: String,
     pin_code: String
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;