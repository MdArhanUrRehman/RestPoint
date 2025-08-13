// lib/connectDB.js
import mongoose from "mongoose";

let isConnected = false; // Track connection status

const connectDB = async () => {
  if (isConnected) {
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables");
  }

  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = conn.connections[0].readyState === 1;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
