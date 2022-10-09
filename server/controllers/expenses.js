var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var expenses = require('../models/expenses');
var db = mongoose.connection;
var dburl = 'mongodb://localhost:27017/BioAI';
var bcrypt = require('bcryptjs');
var VerifyToken = require('./VerifyToken');
// DB connection
db.on('error', function () {
    console.log('There was an Error Communicating with Database');
});
mongoose.connect(dburl, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true 
    },
    function (err) {
        if (err) {
            return console.log('There was error Connecting to Database URL');
    }

});

// Find Expenses
module.exports.get_all_expenses = (req, res, next) => {
    
    expenses.findOne(
        {
            email: req.body.email
        })
        .exec(function (error, results) {
            if (error) {
                return next(error);
            }
            // If valid user was not found, send 404
            if (!results) {
                res.status(404).send('No Record Found');
            }
            if(results.email != req.body.email){
                res.send('Incorrect Email');
            }
            else {
                // Respond with valid data
                res.json(results);
            }
        });
};

// Delete Expense
module.exports.delete_a_expense = (req, res) => {

    expenses.findOneAndDelete(
        { 
            email: req.body.email 
        },
        (err, result) => {
        if (err) return res.send(err)
        res.json(result);
    });
};