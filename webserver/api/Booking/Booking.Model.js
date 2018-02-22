var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ParkItDB');

var bookingDetailsSchema = new mongoose.Schema({

    City:String,
    Office:String,
    Tower:String,
    Employee_ID: String,
    Vehicle_Type:String,
    Vehicle_Number: String,
    Time: String,
    Slot_Info:[
      {
        Slot_Name : Number,
        Slot_Status: String,
        Slot_Type: String
      }
    ]

});

var bookingDetails = mongoose.model('bookingDetails', bookingDetailsSchema);

exports = module.exports = bookingDetails;
