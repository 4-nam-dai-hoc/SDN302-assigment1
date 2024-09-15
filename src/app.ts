import express from 'express';
import bodyParser from 'body-parser';
import { errorHandler } from './utils/responseHandlers';
import connectDB from './config/db';
import quizRoutes from './routes/quizzes';
import questionRoutes from './routes/questions';

const app = express();
const port = 3000;

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route handlers
app.use('/quizzes', quizRoutes);
app.use('/questions', questionRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});