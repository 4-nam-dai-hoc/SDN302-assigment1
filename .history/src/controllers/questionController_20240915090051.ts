import { Request, Response, NextFunction } from 'express';
import Question from '../models/Question';
import { handleNotFound, handleBadRequest, handleServerError, handleSuccess } from '../utils/responseHandlers';

// Get all questions
export const getAllQuestions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const questions = await Question.find();
    handleSuccess(res, 'Questions retrieved successfully', questions);
  } catch (error) {
    handleServerError(res, 'Failed to retrieve questions');
    next(error);
  }
};

// Get question by ID
export const getQuestionById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) {
      return handleNotFound(res, 'Question not found');
    }
    handleSuccess(res, 'Question retrieved successfully', question);
  } catch (error) {
    handleServerError(res, 'Failed to retrieve question');
    next(error);
  }
};

// Create a new question
export const createQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = new Question(req.body);
    await question.save();
    handleSuccess(res, 'Question created successfully', question);
  } catch (error) {
    if ((error as any).name === 'ValidationError') {
      return handleBadRequest(res, (error as any).message);
    }
    handleServerError(res, 'Failed to create question');
    next(error);
  }
};

// Update a question by ID
export const updateQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.questionId, req.body, { new: true, runValidators: true });
    if (!question) {
      return handleNotFound(res, 'Question not found');
    }
    handleSuccess(res, 'Question updated successfully', question);
  } catch (error) {
    if ((error as any).name === 'ValidationError') {
      return handleBadRequest(res, (error as any).message);
    }
    handleServerError(res, 'Failed to update question');
    next(error);
  }
};

// Delete a question by ID
export const deleteQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.questionId);
    if (!question) {
      return handleNotFound(res, 'Question not found');
    }
    handleSuccess(res, 'Question deleted successfully', null);
  } catch (error) {
    handleServerError(res, 'Failed to delete question');
    next(error);
  }
};