import mongoose, { model } from "mongoose";

const matchSchema = new mongoose.Schema(
  {
    tournament: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament",
      required: true,
    },
    round: {
      type: String,
      required: true,
    },
    player1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true,
    },
    player2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true,
    },

    sets: [
      {
        player1Score: { type: Number, required: true, min: 0 },
        player2Score: { type: Number, required: true, min: 0 },
      },
    ],
  
    bestOf: {
      type: Number,
      enum: [3, 5, 7],
      default: 5,
    },
    tableNumber: {
      type: Number,
      min: 1,
    },
    scheduledAt: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "live", "completed", "cancelled"],
      default: "scheduled",
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

const Match = model("Match", matchSchema);

export default Match;