const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

router.post("/login",(req,res)=>{

const {username,password} = req.body;

if(username==="admin" && password==="1234"){

const token = jwt.sign(
{role:"admin"},
SECRET,
{expiresIn:"1h"}
);

res.json({token});

}else{
res.status(401).json({message:"Invalid"});
}

});

module.exports = router;