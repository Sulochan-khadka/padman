 const mongoose=require('mongoose')

 const connectDB=async()=>{
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/padman");
    console.log("connection Successful...")
    }
    catch(err){
          console.log("connection failed",err)
    }
 }

 connectDB();