const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

name: String,

contact: String,

service: String,

specification: String,

instructions: String,

deadline: String,

file: String,

status:{
type:String,
default:"Ongoing"
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Order", OrderSchema);