const multer=require("multer");

const storage=multer.diskStorage({
 destination:"./uploads",
 filename:(req,f,cb)=>cb(null,Date.now()+"-"+f.originalname)
});
module.exports=multer({storage});
