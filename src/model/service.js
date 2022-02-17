import { Schema, model } from "mongoose";
import mongoose from "mongoose"
const newService = Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    timeWork: {
      type: String,
      required: true
    }, 
    price: {
      type: String,
      required: true,
    },
    colabsId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("ServicoColabs", newService);
