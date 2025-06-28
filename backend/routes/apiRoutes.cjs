const express=require("express");
const router=express.Router();
const { generateGeminiContent } =  require("../controllers/apiControllers.cjs");


router.post('/generate',generateGeminiContent);

module.exports=router;