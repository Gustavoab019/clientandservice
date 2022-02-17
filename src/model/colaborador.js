const mongoose = require('mongoose');
import { Schema, model } from "mongoose";
const newColaborador = Schema(
  {
    name: {
      type: String,
      required: true,
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
    services: {
        type: [{ type: mongoose.Types.ObjectId, ref: 'ServicoColabs' }],
        required: true,
      },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Colabs", newColaborador);
