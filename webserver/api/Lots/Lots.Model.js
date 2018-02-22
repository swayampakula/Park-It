var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ParkItDB');

var lotDetailsSchema = new mongoose.Schema({

    City:[String],
    Office:[String],
    Tower:[String],
    Slot_Size: Number,
    Slot_Info:[
      {
        Slot_Name : String,
        Slot_Status: String,
        Slot_Type: String
      }
    ]

});

var lotDetails = mongoose.model('lotDetails', lotDetailsSchema);

exports = module.exports = lotDetails;
