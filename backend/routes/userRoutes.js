const express=require("express");
const { creatUser } = require("../controllers/authControllers");
const router=express.Router();


router.post("/singup",creatUser)

module.exports=router;