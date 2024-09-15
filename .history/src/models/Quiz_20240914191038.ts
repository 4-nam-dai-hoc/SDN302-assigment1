import { Schema, model, Document } from 'mongoose';

interface IQuiz extends Document {
  title: string;
  description: string;
  questions: Schema.Types.ObjectId[];
}

const quizSchema = new Schema<IQuiz>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

export default model<IQuiz>('Quiz', quizSchema);