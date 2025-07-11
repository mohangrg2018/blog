import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/blog-app`);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
