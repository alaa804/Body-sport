const express = require("express");
const fileUpload = require('express-fileupload')
const app = express();






// const authRouter = require("./routes/authRouter")




  const productRouter = require("./routes/ProductRouter")
 const authRouter = require("./routes/authRouter");
 const connectDB = require("./config/connectDB");
 const logger = require("./middlewares/logger");
 const upload = require("./routes/upload")
 const categoryRouter = require("./routes/categoryRouter")
 const paymentRouter = require("./routes/paymentRouter")


//middlewares
 app.use(express.json());
 
app.use("/api/auth" , logger);

app.use(fileUpload({
     useTempFiles: true
}))

// CONNECT THE DATABASE..
     connectDB();




//GLOBAL MIDDILWARE
 app.use("/api/auth" , authRouter)
 app.use("/api" , productRouter)
 app.use("/api" , upload)
 app.use("/api" , categoryRouter)
 app.use("/api" , paymentRouter)

 

//start the server
const PORT = process.env.PORT ||  5000 ;



app.listen(PORT , (err) =>
err
? console.error(err)
: console.log(`THE SERVER IS RUNNING ON PORT ${PORT}...`)
);









