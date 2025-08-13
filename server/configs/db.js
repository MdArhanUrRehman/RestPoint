import mongoose from "mongoose";

const connectDB = async () => {

    try {
    mongoose.connection.on("connected", () => console.log("✅ Database Connected"));
    mongoose.connection.on("error", (err) => console.error("❌ DB Error:", err));

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "hotel-booking", // safer than manually appending to URI
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // 10s timeout
    });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process if DB fails
  }

};

export default connectDB;
// Note: Do not use the '@' symbol in your database user's password.