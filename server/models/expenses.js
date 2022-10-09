var mongoose = require('mongoose');
var schema = mongoose.Schema;

var expenses_schema = new schema(
    {
        Date:{
            type: Date,
            required: true
        },
        Amount:{
            type: Number,
            required: true
        },
        Description:{
            type: String,
            max: 256
        },
        Category:{
            type: String,
            required: true
        },
        Source:{
            type: String,
            required: true
        },
        User_Id:{
            type: Number,
            required: true
        }
    }
)
module.exports = mongoose.model('expenses', expenses_schema);