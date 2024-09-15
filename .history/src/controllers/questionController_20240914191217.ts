import { Request, Response } from 'express';
import Question from '../models/Question';

export const getAllQuestions = async (req: Request, res: Response) => {
  const questions = await Question.find();
  res.json(questions);
};

export const getQuestionById = async (req: Request, res: Response) => {
  const question = await Question.findById(req.params.questionId);
  res.json(question);
};

export const createQuestion = async (req: Request, res: Response) => {
  const question = new Question(req.body);
  await question.save();
  res.status(201).json(question);
};

export const updateQuestion = async (req: Request, res: Response) => {
  const question = await Question.findByIdAndUpdate(req.params.questionId, req.body, { new: true });
  res.json(question);
};

export const deleteQuestion = async (req: Request, res: Response) => {
  await Question.findByIdAndDelete(req.params.questionId);
  res.status(204).send();
};