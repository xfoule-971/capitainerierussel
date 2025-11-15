const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const schema=new mongoose.Schema({
 username:String,
 email:{type:String,unique:true},
 passwordHash:String
});

//Hash du mot de passe quand il est modifié
schema.methods.setPassword=async function(p){this.passwordHash=await bcrypt.hash(p,10);};
schema.methods.verifyPassword=function(p){return bcrypt.compare(p,this.passwordHash);};
module.exports=mongoose.model("User",schema);
