import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { type } from 'os';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true, // Deprecated in recent Mongoose versions
      // useUnifiedTopology: true, // Deprecated in recent Mongoose versions
    });
    console.log('MongoDB Atlas connected successfully!');
  } catch (error) {
    console.error('MongoDB Atlas connection failed:', error);
    process.exit(1); // Exit process with failure
  }
};

// Define a Mongoose Schema and Model for your images
const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});

const Image = mongoose.model('Image', imageSchema);

export { connectDB, Image };