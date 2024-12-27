// const { MongoClient, ServerApiVersion } = require('mongodb');
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI; 

if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
