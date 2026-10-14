import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "player", "viewer"],
      default: "viewer",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;