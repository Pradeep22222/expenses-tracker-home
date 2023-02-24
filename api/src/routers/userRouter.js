import express from "express";
import { addUser } from "../../model/usersModel/userModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await addUser(req.body);
    res.json({
      status: "success",
      message: "Please check your email to verify your account",
      result,
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
    error.message="The email address is already being registered"}
      next(error);
  }
});
export default router;
