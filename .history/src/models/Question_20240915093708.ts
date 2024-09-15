import { Schema, model, Document } from 'mongoose';

// Define the IQuestion interface extending mongoose Document
interface IQuestion extends Document {
  text: string; // The question text
  options: string[]; // Array of possible answers
  keywords: string[]; // Array of keywords related to the question
  correctAnswerIndex: number; // Index of the correct answer in the options array
}

// Create a schema for the Question model
const questionSchema = new Schema<IQuestion>({
  text: { type: String, required: true }, // Question text is required
  options: { type: [String], required: true }, // Options array is required
  keywords: { type: [String], required: true }, // Keywords array is required
  correctAnswerIndex: { type: Number, required: true } // Correct answer index is required
});

// Export the Question model
export default model<IQuestion>('Question', questionSchema);