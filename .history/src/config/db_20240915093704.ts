import mongoose from 'mongoose';

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database
        await mongoose.connect('mongodb://localhost:27017/SimpleQuiz');
        console.log('MongoDB connected successfully');
    } catch (error) {
        // Log any connection errors and exit the process with a failure code
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;