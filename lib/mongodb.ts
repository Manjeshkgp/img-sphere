import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to DB successfully");
  } catch (error) {
    console.log("Error occured during DB connection", { error });
  }
};
