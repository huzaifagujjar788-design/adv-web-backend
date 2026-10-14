import mongoose, { model } from "mongoose";

const playerSchema = new mongoose.Schema(
  {

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 5,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    country: {
      type: String,
      default: "Pakistan",
    },

    playingStyle: {
      type: String,
      enum: ["shakehand", "penhold"],
      default: "shakehand",
    },

    handedness: {
      type: String,
      enum: ["right", "left"],
      default: "right",
    },
    ranking: {
      type: Number,
      default: 0,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    wins: {
      type: Number,
      default: 0,
    },
    losses: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Player = model("Player", playerSchema);

export default Player;