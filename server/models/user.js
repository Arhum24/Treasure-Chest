var mongoose = require('mongoose');
require('mongoose-type-email');
var schema = mongoose.Schema;

var user_schema = new schema(
    {
        User_Id:{
            type: Number,
            required: true
        },
        IsActive:{
            type: Boolean,
            default: true
        },
        User_Name:{
            type: String,
            required: true,
            max: 120
        },
        Name:{
            type: String,
            required: true,
            max: 120
        },
        Password:{
            type: String,
            required: true,
            min: 8,
            max: 20
        },
        Email:{
            type: mongoose.SchemaTypes.Email,
            required: true,
            unique: true,
            max: 255
        },
        Phone_Number:{
            type: String,
            min: 9,
            max: 17
        },
        Date_Added:{
            type: Date,
            default: Date.now
        },
        Date_Modified:{
            type: Date,
            default: null
        }
    })

    module.exports = mongoose.model('users', user_schema);