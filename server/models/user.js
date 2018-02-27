const mongoose = require('mongoose');


const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        minlength:1
    },
    email:{
        type:String,
        required:true,
        trim: true,
        minlength:1
    },
    age:{
        type:Number,
        required:true,
        minlength:1
    },
    country:{
        type:String,
        default: null
    }

});
module.exports = {User};