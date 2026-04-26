import userSchema from "../schemas/UserSchema.js";
import mongoose , { Model }from "mongoose";

const userModel = new mongoose.model("user",userSchema)

export default userModel