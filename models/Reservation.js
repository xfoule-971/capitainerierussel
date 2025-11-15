const mongoose=require("mongoose");

module.exports=mongoose.model("Reservation", new mongoose.Schema({
 catwayNumber:Number,
 clientName:String,
 boatName:String,
 startDate:Date,
 endDate:Date
}));
