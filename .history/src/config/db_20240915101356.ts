import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database
        await mongoose.connect(process.env['MONGO_URL'] as string);
        console.log('MongoDB connected successfully');
    } catch (error) {
        // Log any connection errors and exit the process with a failure code
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;