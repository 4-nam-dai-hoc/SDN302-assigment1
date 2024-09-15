import { Router } from 'express';
import * as quizController from '../controllers/quizController';

const router = Router();

// Route to get all quizzes
router.get('/', quizController.getAllQuizzes);

// Route to get a specific quiz by its ID
router.get('/:quizId', quizController.getQuizById);

// Route to create a new quiz
router.post('/', quizController.createQuiz);

// Route to update an existing quiz by its ID
router.put('/:quizId', quizController.updateQuiz);

// Route to delete a quiz by its ID
router.delete('/:quizId', quizController.deleteQuiz);

// Route to get a specific quiz along with its questions
router.get('/:quizId/populate', quizController.getQuizWithQuestions);

// Route to add a single question to a specific quiz
router.post('/:quizId/question', quizController.addQuestionToQuiz);

// Route to add multiple questions to a specific quiz
router.post('/:quizId/questions', quizController.addQuestionsToQuiz);

export default router;