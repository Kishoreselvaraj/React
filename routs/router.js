const express=require("express");
const router=express.Router();
router.route("/").get((req,res)=>{
    res.send("Hi this is home page");
});
router.route("/:id").post((req,res)=>{
    // res.send('New id created ${}');
    res.status(200).json({message:(req.params.id )});
});
router.route("/:id").put((req,res)=>{
    res.send("Updated a id"(req.params.id));
});
router.route("/:id").delete((req,res)=>{
    res.send("Hi this is home page");
});

module.exports=router;