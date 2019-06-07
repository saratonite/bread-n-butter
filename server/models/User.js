import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true
  },
  password: String
});

//TODO:  Mongoose Hooks , Static methods and instance methods

const User = model("User", userSchema);

export default User;
