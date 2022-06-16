const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donorSchema = new Schema({
        name: {
            type: String,
            required:true
          },
        email:{
            type: String,
            required:true,
            unique: true
          },
        password:{
            type: String,
            required:true
          },

});

const User2 = mongoose.model('User', donorSchema);
module.exports = User2;