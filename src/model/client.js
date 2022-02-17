import { Schema, model } from "mongoose";

const newClient = Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Client", newClient);
