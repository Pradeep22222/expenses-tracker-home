import express from "express";
import cors from "cors";
import userRouter from "./src/routers/userRouter.js";
import { dbConnect } from "./config/dbConfig.js";
const app = express();
const PORT = 8000;
dbConnect();
// middlewares
app.use(express.json());
app.use(cors());
// APIs
app.use("/api/v1/user", userRouter);

// server side rendering
app.use("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "response from root url",
    });
  } catch (error) {
    res({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server running on port ${PORT}`);
});
