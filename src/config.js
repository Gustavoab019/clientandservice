import { config } from "dotenv";

config();

export const MONGODB_URI = "mongodb+srv://schelyUser:MoFoRzmgri5QYHEx@clusterdev.3kuwq.mongodb.net/Schely-DB?retryWrites=true&w=majority"
  process.env.MONGODB_URI || "mongodb://localhost/test";
