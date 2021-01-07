const express = require("express");
const app = express();


 const authRouter = require("./routes/authRouter");
 const connectDB = require("./config/connectDB");
 const logger = require("./middlewares/logger");


//middlewares
 app.use(express.json());
app.use("/api/auth" , logger);
// CONNECT THE DATABASE..
     connectDB();



//GLOBAL MIDDILWARE
 app.use("/api/auth" , authRouter)

//start the server
const PORT = process.env.PORT ||  5000 ;
app.listen(PORT , (err) =>
err
? console.error(err)
: console.log(`THE SERVER IS RUNNING ON PORT ${PORT}...`)
);









