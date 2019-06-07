import { Schema, model } from "mongoose";
import { hash } from "bcryptjs";

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

userSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
  }

  next();
});

const User = model("User", userSchema);

export default User;
