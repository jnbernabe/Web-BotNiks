//Nandini Hariprasad
//22/12/2021
//User Model

//require modules for the model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: "",
            trim: true,
            required: "username is required"
        },
        
        password:
        {
            type: String,
            default: "",
            trim: true,
            required: "password is required"
        },
        
       email:
       {
           type: String,
           default: "",
            trim: true,
            required: "email address is required"

       },
       displayName:
       {
           type: String,
           default: "",
            trim: true,
            required: "Display name is required"

       },
       firstName:
       {
           type: String,
           default: "",
           trim: true,
           required: "First name is required"
       },
       lastName:
       {
           type: String,
           default: "",
           trim: true,
           required: "Last name is required"
       },
       userID:
       {
           type: String,
           default: "",
           trim: true,
           required: "User ID is required"
       },
       userType:
       {
           type: String,
           default: "",
           trim: true,
           reuired: "User Type is required"
       },
       /*
       created:
       {
           type: Date,
           default: Date.now,

       },
       update:
       {
           type: Date,
           default: Date.now,

       }
       */

    },

    {
        collection: "users"

    }
);

//configure options for users

let options = ({missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);