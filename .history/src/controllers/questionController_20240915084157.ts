import { Request, Response, NextFunction } from 'express';
import Question from '../models/Question';

// Lấy tất cả các câu hỏi
export const getAllQuestions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const questions = await Question.find();
    res.json({ success: true, data: questions });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to retrieve questions' });
    next(error);
  }
};

// Lấy câu hỏi theo ID
export const getQuestionById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) {
      return res.status(404).json({ success: false, error: 'Question not found' });
    }
    res.json({ success: true, data: question });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to retrieve question' });
    next(error);
  }
};

// Tạo câu hỏi mới
export const createQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json({ success: true, data: question });
  } catch (error) {
    if ((error as Error).name === 'ValidationError') {
      return res.status(400).json({ success: false, error: (error as Error).message });
    }
    res.status(500).json({ success: false, error: 'Failed to create question' });
    next(error);
  }
};

// Cập nhật câu hỏi theo ID
export const updateQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.questionId, req.body, { new: true, runValidators: true });
    if (!question) {
      return res.status(404).json({ success: false, error: 'Question not found' });
    }
    res.json({ success: true, data: question });
  } catch (error) {
    if ((error as Error).name === 'ValidationError') {
      return res.status(400).json({ success: false, error: (error as Error).message });
    }
    res.status(500).json({ success: false, error: 'Failed to update question' });
    next(error);
  }
};

// Xóa câu hỏi theo ID
export const deleteQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.questionId);
    if (!question) {
      return res.status(404).json({ success: false, error: 'Question not found' });
    }
    res.status(204).json({ success: true, message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete question' });
    next(error);
  }
};