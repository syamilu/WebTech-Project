import mongoose from "mongoose";

export default async function connectMongo() {
  try {
    mongoose.connect(process.env.MONGODB_URI || "");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
