import mongoose, { model } from "mongoose";

const tournamentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      enum: ["singles", "doubles", "team"],
      default: "singles",
    },
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed"],
      default: "upcoming",
    },
    entryFee: {
      type: Number,
      default: 0,
      min: 0,
    },
    maxPlayers: {
      type: Number,
      default: 16,
    },

    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    winner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  },
  {
    timestamps: true,
  }
);

const Tournament = model("Tournament", tournamentSchema);

export default Tournament;