import { Schema, model, Document } from 'mongoose';

interface IQuestion extends Document {
  text: string;
  options: string[];
  keywords: string[];
  correctAnswerIndex: number;
}

const questionSchema = new Schema<IQuestion>({
  text: { type: String, required: true },
  options: { type: [String], required: true },
  keywords: { type: [String], required: true },
  correctAnswerIndex: { type: Number, required: true }
});

export default model<IQuestion>('Question', questionSchema);