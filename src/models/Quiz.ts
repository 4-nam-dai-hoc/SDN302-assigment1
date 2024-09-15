import { Schema, model, Document } from 'mongoose';

// Define the IQuiz interface extending mongoose's Document interface
interface IQuiz extends Document {
  title: string; // Title of the quiz
  description: string; // Description of the quiz
  questions: Schema.Types.ObjectId[]; // Array of question IDs (references to Question documents)
}

// Define the schema for the Quiz model
const quizSchema = new Schema<IQuiz>({
  title: { type: String, required: true }, // Title field, required
  description: { type: String, required: true }, // Description field, required
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }] // Array of ObjectIds referencing the Question model
});

// Export the Quiz model based on the quizSchema
export default model<IQuiz>('Quiz', quizSchema);