import express from "express";
import cors from "cors";
import userRouter from "./src/routers/userRouter.js";
import { dbConnect } from "./config/dbConfig.js";
const app = express();
const PORT = 8000;

// db connect
dbConnect();
// middlewares
app.use(express.json());
app.use(cors());

// APIs
app.use("/api/v1/user", userRouter);
//error handling
app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
}); 

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
