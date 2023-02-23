import express from "express";
import { addUser } from "../../model/users/userModel.js";
const router = express.Router();

router.post("/", async(req, res, next) => {
  try {
    const data = req.body;
    console.log(data)
   const result= await addUser(data);
     res.json({
       status: "success",
       message: "please check your email to verify your account",
       result
     });
   } catch (error) {
    next(error)
   } 
})
export default router;