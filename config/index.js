import { config } from "dotenv";
config();

export const mongodb_uri = process.env.MONGODB_URI;
