import { Request, Response } from 'express';
import Quiz from '../models/Quiz';
import Question from '../models/Question';

export const getAllQuizzes = async (req: Request, res: Response) => {
  const quizzes = await Quiz.find().populate('questions');
  res.json(quizzes);
};

export const getQuizById = async (req: Request, res: Response) => {
  const quiz = await Quiz.findById(req.params.quizId).populate('questions');
  res.json(quiz);
};

export const createQuiz = async (req: Request, res: Response) => {
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.status(201).json(quiz);
};

export const updateQuiz = async (req: Request, res: Response) => {
  const quiz = await Quiz.findByIdAndUpdate(req.params.quizId, req.body, { new: true });
  res.json(quiz);
};

export const deleteQuiz = async (req: Request, res: Response) => {
  await Quiz.findByIdAndDelete(req.params.quizId);
  res.status(204).send();
};

export const getQuizWithQuestions = async (req: Request, res: Response) => {
  const quiz = await Quiz.findById(req.params.quizId).populate({
    path: 'questions',
    match: { keywords: 'capital' }
  });
  res.json(quiz);
};

export const addQuestionToQuiz = async (req: Request, res: Response) => {
  const question = new Question(req.body);
  await question.save();
  const quiz = await Quiz.findById(req.params.quizId);
  if (quiz) {
    quiz.questions.push(question._id);
    await quiz.save();
    res.status(201).json(question);
  } else {
    res.status(404).send('Quiz not found');
  }
};

export const addQuestionsToQuiz = async (req: Request, res: Response) => {
  const questions = await Question.insertMany(req.body);
  const quiz = await Quiz.findById(req.params.quizId);
  if (quiz) {
    questions.forEach(question => quiz.questions.push(question._id));
    await quiz.save();
    res.status(201).json(questions);
  } else {
    res.status(404).send('Quiz not found');
  }
};