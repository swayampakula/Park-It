var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ParkItDB');

var empDetailsSchema = new mongoose.Schema({

    Employee_ID:String,
    Employee_Name:String,
    Employee_Email:String,
    Role:String,
    password:Password,
    Booking_Count: Number,
    Vehicle_Info: {
      Vehicle_Number: String,
      Vehicle_Type: String
    }
    Slot_Info: {
      City:String,
      Office:String,
      Tower:String,
      Slot_Name : String
    }
});

var empdetails = mongoose.model('empdetails', empDetailsSchema);

exports = module.exports = empdetails;
