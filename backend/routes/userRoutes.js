const express=require("express");
const { creatUser, loginUser } = require("../controllers/authControllers");
const router=express.Router();


router.post("/singup",creatUser);
router.post("/login",loginUser);

module.exports=router;