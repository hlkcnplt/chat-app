import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlenght: 6,
    },
    email: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
