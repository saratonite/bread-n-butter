import { Schema, model } from "mongoose";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";

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

// Methods

userSchema.methods.matchPassword = async function(password) {
  let isOK = await compare(password, this.password);

  return isOK;
};

userSchema.methods.getToken = async function() {
  const token = await jwt.sign(
    { id: this.id, email: this.email },
    "THE-SECRET-KEY"
  );

  return token;
};

const User = model("User", userSchema);

export default User;
