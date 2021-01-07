 const mongoose = require("mongoose");
 require("dotenv").config({ path : "./config/.env"})

 const connectDB = async() => {

 const options = {
   useNewUrlParser: true ,
    useUnifiedTopology: true,
    };

   try {
      await mongoose.connect(process.env.MONGO_URL , options);
      console.log("THE DATABASE IS CONNECTED....");
    } catch(error) {
         console.log(error);
   }
} 



module.exports = connectDB