import express from "express";
import { addUser } from "../../model/usersModel/userModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await addUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "Your account has been successfully created, please go to login page and login with you email "+ result.email,
          result, 
        })
      : res.json({
          status: "error",
          message: "unable to register the user, please try again later",
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
