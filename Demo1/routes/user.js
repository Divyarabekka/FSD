import express from "express";
import bcrypt from "bcrypt";
import { generateToken, getUserByEmail } from "../controllers/user.js";
import { User } from "../models/user.js";

const router = express.Router();


router.post("/login", async(req,res) =>{
  try {
    //check user exist 
    const user= await getUserByEmail(req);
    // no user exist
    if(!user){
      return res.status(400).json({
        error: "invalid authorize",
      });
    }
    //validate password
    const validatePassword= await bcrypt.compare(
      req.body.password,
      user.password
    );
    if(!validatePassword){
      return res.status(400).json({
        error:"invalide psw",
      });
    }
    // generate password
    const token= generateToken(user._id);
    res.status(200).json({message:"loggedin",token})
  } catch (error) {
    console.log(error)
    res.status(500).json({error : "internal server error"});

  }

})

//signup
router.post("/signup", async(req,res) =>{
  try {
    let user = await getUserByEmail(req);
    if(user){
        return res.status(400).json({error: "user already exist"});
    }
    //genrate hased passowrd
    const salt =await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(req.body.password, salt);
    user = await new User({
    ...req.body,
     password:hasedPassword
 }) .save();

 //generate token and give response
 const token = generateToken(user._id);
 res.status(201).json({
  message:"successfully signup",
 token,
});
  } catch (error) {
    console.log(error);
    res.status(500).json({error : "internal server error"});
  }  
})


router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude the password field from the response
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


export const userRouter = router;