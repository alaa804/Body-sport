const express = require("express");

const app = express();

// const authRouter = require("./routes/authRouter")

const connectDB = require("./config/connectDB");

// MIDDILWARE
app.use(express.json());

// CONNECT THE DATABASE..
connectDB();


//GLOBAL ROUTER MIDDILWARE
app.use("/api/auth" , require("./routes/authRouter"))


// START THE LOCALHOST SERVER ..

const PORT = process.env.PORT ||  5000 ;
app.listen(PORT , (err) => err ? console.error(err)
 : console.log(`THE SERVER IS RUNNING ON HTTP://LOCALHOST:${PORT}`))