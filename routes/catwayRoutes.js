const r=require("express").Router();
const c=require("../controllers/catwayController");
const upload=require("../middleware/uploadMiddleware");
const {requireAuth}=require("../middleware/authMiddleware");

r.get("/",requireAuth,c.list);
r.get("/create",requireAuth,c.createForm);
r.post("/create",requireAuth,upload.single("image"),c.create);
r.get("/edit/:id",requireAuth,c.editForm);
r.post("/edit/:id",requireAuth,upload.single("image"),c.update);
r.post("/delete/:id",requireAuth,c.delete);

module.exports=r;
