const User=require("../models/userModel")

module.exports.creatUser=async(req,res)=>{
    const {name,email,password,phone}=req.body;
    let user=await User({name,email,password,phone});
    await user.save();
    return res.status(200).json({msg:"User is Succesfull login"});
}