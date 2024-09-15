import { Request, Response, NextFunction } from 'express';
import { Types, Schema } from 'mongoose';
import Quiz from '../models/Quiz';
import Question from '../models/Question';
import { handleNotFound, handleBadRequest, handleServerError, handleSuccess } from '../utils/responseHandlers';

const ObjectId = Types.ObjectId;

/**
 * Get all quizzes with their questions populated
 */
export const getAllQuizzes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizzes = await Quiz.find().populate('questions');
    handleSuccess(res, 'Quizzes retrieved successfully', quizzes);
  } catch (error) {
    handleServerError(res, 'Failed to retrieve quizzes');
    next(error);
  }
};

/**
 * Get a quiz by its ID with its questions populated
 */
export const getQuizById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId).populate('questions');
    if (!quiz) {
      return handleNotFound(res, 'Quiz not found');
    }
    handleSuccess(res, 'Quiz retrieved successfully', quiz);
  } catch (error) {
    handleServerError(res, 'Failed to retrieve quiz');
    next(error);
  }
};

/**
 * Create a new quiz
 */
export const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json({ success: true, message: 'Quiz created successfully', data: quiz });
  } catch (error) {
    if ((error as any).name === 'ValidationError') {
      return handleBadRequest(res, (error as any).message);
    }
    handleServerError(res, 'Failed to create quiz');
    next(error);
  }
};

/**
 * Update a quiz by its ID
 */
export const updateQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.quizId, req.body, { new: true, runValidators: true });
    if (!quiz) {
      return handleNotFound(res, 'Quiz not found');
    }
    handleSuccess(res, 'Quiz updated successfully', quiz);
  } catch (error) {
    if ((error as any).name === 'ValidationError') {
      return handleBadRequest(res, (error as any).message);
    }
    handleServerError(res, 'Failed to update quiz');
    next(error);
  }
};

/**
 * Delete a quiz by its ID
 */
export const deleteQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.quizId);
    if (!quiz) {
      return handleNotFound(res, 'Quiz not found');
    }
    res.status(204).send();
  } catch (error) {
    handleServerError(res, 'Failed to delete quiz');
    next(error);
  }
};

/**
 * Get a quiz with questions filtered by a keyword
 */
export const getQuizWithQuestions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId).populate({
      path: 'questions',
      match: { keywords: 'capital' }
    });
    if (!quiz) {
      return handleNotFound(res, 'Quiz not found');
    }
    handleSuccess(res, 'Quiz retrieved successfully', quiz);
  } catch (error) {
    handleServerError(res, 'Failed to retrieve quiz');
    next(error);
  }
};

/**
 * Add a question to a quiz
 */
export const addQuestionToQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = new Question(req.body);
    await question.save();
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) {
      return handleNotFound(res, 'Quiz not found');
    }
    quiz.questions.push(question._id as Schema.Types.ObjectId);
    await quiz.save();
    res.status(201).json({ success: true, message: 'Question added to quiz successfully', data: question });
  } catch (error) {
    if ((error as any).name === 'ValidationError') {
      return handleBadRequest(res, (error as any).message);
    }
    handleServerError(res, 'Failed to add question to quiz');
    next(error);
  }
};

/**
 * Add multiple questions to a quiz
 */
export const addQuestionsToQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const questions = await Question.insertMany(req.body);
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) {
      return handleNotFound(res, 'Quiz not found');
    }
    questions.forEach(question => quiz.questions.push(question._id as Schema.Types.ObjectId));
    await quiz.save();
    res.status(201).json({ success: true, message: 'Questions added to quiz successfully', data: questions });
  } catch (error) {
    if ((error as any).name === 'ValidationError') {
      return handleBadRequest(res, (error as any).message);
    }
    handleServerError(res, 'Failed to add questions to quiz');
    next(error);
  }
};