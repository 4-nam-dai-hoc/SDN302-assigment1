
import { Document } from 'mongoose';



export default interface QuestionDocument extends Document {

  questionText: string;

  options: string[];

  correctOption: string;

  keywords: string[];

}