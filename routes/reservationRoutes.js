const r=require("express").Router();
const c=require("../controllers/reservationController");
const {requireAuth}=require("../middleware/authMiddleware");

r.get("/",requireAuth,c.list);
r.get("/create",requireAuth,c.createForm);
r.post("/create",requireAuth,c.create);
r.get("/edit/:id",requireAuth,c.editForm);
r.post("/edit/:id",requireAuth,c.update);
r.post("/delete/:id",requireAuth,c.delete);

module.exports=r;
