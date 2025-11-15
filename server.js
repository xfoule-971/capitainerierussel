
require("dotenv").config();
const express=require("express");
const path=require("path");
const session=require("express-session");
const MongoStore=require("connect-mongo");
const morgan=require("morgan");
const methodOverride=require("method-override");
const connectDB=require("./config/db");
const app=express();

connectDB(process.env.MONGO_URI);

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan("dev"));
app.use(methodOverride("_method"));

app.use(session({
 secret:process.env.SESSION_SECRET||"secret",
 resave:false,saveUninitialized:false,
 store:MongoStore.create({mongoUrl:process.env.MONGO_URI})
}));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use("/uploads", express.static(path.join(__dirname,"uploads")));

app.use((req,res,next)=>{res.locals.user=req.session.user||null; next();});

app.use("/", require("./routes/authRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/catways", require("./routes/catwayRoutes"));
app.use("/reservations", require("./routes/reservationRoutes"));

app.listen(5000,()=>console.log("http://localhost:5000"));
