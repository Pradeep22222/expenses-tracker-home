import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxLength: 30,
    required: true,
  },
  lastName: {
    type: String,
    maxLength: 30,
    required: true,
  },
 email: {
    type: String,
    maxLength: 40,
    required: true,
  },
  password: {
    type: String,
    maxLength: 30,
    required: true,
  },

  
}, { timestamps: true });

export default mongoose.model("user",userSchema);