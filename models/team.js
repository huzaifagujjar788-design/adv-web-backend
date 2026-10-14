import mongoose, { model } from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    coach: {
      type: String,
      required: true,
    },
    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],

    logo: {
      type: String,
    },
    foundedYear: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Team = model("Team", teamSchema);

export default Team;