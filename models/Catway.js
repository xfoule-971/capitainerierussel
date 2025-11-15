const mongoose=require("mongoose");

module.exports=mongoose.model("Catway", new mongoose.Schema({
 catwayNumber:{
    type:Number,
    unique:true
},
 catwayType:String,
 catwayState:String,
 image:String
}));
