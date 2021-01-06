const express = require("express");


const app = express();

const ProductRouter = require("./routes/ProductRouter")
// const authRouter = require("./routes/authRouter")

const connectDB = require("./config/connectDB");

// MIDDILWARE
app.use(express.json());

// CONNECT THE DATABASE..
connectDB();


//GLOBAL ROUTER MIDDILWARE
app.use("/api/auth" , require("./routes/authRouter"))

app.use("/api" , ProductRouter)

// START THE LOCALHOST SERVER ..

const PORT = process.env.PORT ||  5000 ;
app.listen(PORT , (err) => err ? console.error(err)
: console.log(`THE SERVER IS RUNNING ON HTTP://LOCALHOST:${PORT}`))