import { Router } from 'express';
import * as questionController from '../controllers/questionController';

const router = Router();

// Route to get all questions
router.get('/', questionController.getAllQuestions);

// Route to get a specific question by ID
router.get('/:questionId', questionController.getQuestionById);

// Route to create a new question
router.post('/', questionController.createQuestion);

// Route to update an existing question by ID
router.put('/:questionId', questionController.updateQuestion);

// Route to delete a question by ID
router.delete('/:questionId', questionController.deleteQuestion);

export default router;