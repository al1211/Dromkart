const mongodb=require("mongoose");

const ConnectDb=async()=>{
    try{
        await mongodb.connect(process.env.MONGO_URI);
        console.log("mongodb in connect");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports=ConnectDb;