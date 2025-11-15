const r=require("express").Router();
const c=require("../controllers/authController");
const {requireAuth}=require("../middleware/authMiddleware");

r.get("/login",c.showLogin);
r.post("/login",c.login);
r.get("/register",c.showRegister);
r.post("/register",c.register);
r.get("/logout",c.logout);
r.get("/dashboard",requireAuth,(req,res)=>res.render("dashboard/index",{user:req.session.user}));

module.exports=r;
