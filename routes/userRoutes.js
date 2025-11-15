
const r=require("express").Router();
const c=require("../controllers/userController");
const {requireAuth}=require("../middleware/authMiddleware");
r.get("/",requireAuth,c.list);
r.get("/:id",requireAuth,c.details);
r.get("/edit/:id",requireAuth,c.editForm);
r.post("/edit/:id",requireAuth,c.update);
r.post("/delete/:id",requireAuth,c.delete);
module.exports=r;
