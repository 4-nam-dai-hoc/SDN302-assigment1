import express from 'express';
import bodyParser from 'body-parser';
import { errorHandler } from './middleware/errorHandler';
import connectDB from './db';

const app = express();
const port = 3000;

// Connect to the database
connectDB();

app.use(bodyParser.json());

import quizRoutes from './routes/quizzes';
import questionRoutes from './routes/questions';

app.use('/quizzes', quizRoutes);
app.use('/questions', questionRoutes);

// Use the error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});