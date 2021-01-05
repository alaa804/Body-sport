const express = require("express");

const app = express();

const authRouter = require("./routes/authRouter")

const connectDB = require("./config/connectDB");


// CONNECT THE DATABASE..
connectDB();


//GLOBAL MIDDILWARE
app.use("/api/auth" , authRouter)


// START THE LOCALHOST SERVER ..

const PORT = process.env.PORT ||  5000 ;
app.listen(PORT , (err) => err ? console.error(err)
 : console.log(`THE SERVER IS RUNNING ON HTTP://LOCALHOST:${PORT}`))