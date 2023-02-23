import userSchema from "./userSchema.js";
export const addUser = (user) => {
    return userSchema(user).save();
}