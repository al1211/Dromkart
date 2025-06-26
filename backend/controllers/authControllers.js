const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.creatUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Use findOne instead of find
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    await user.save();
    return res.status(201).json({ msg: "User successfully registered" });

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};


module.exports.loginUser=async(req,res)=>{
  try{

    let {email,password}=req.body;
    
    let user=await User.findOne({email});
    if(!user) return res.status(401).json({message:"Invalid user or password"});

  let match=await bcrypt.compare(password,user.password);
  if(!match) return res.status(401).json({msg:"Invalid email or password"});
  res.status(200).json({message:"Login Succesfull"});
  }catch(err){
    res.status(500).json({msg:"login failed",error:err.message})
  }

};