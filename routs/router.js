const express=require("express");
const router=express.Router();
router.route("/").get((req,res)=>{
    res.send("Hi this is home page");
});
module.exports=router;