import { Router } from 'express';
import * as quizController from '../controllers/quizController';

const router = Router();

router.get('/', quizController.getAllQuizzes);
router.get('/:quizId', quizController.getQuizById);
router.post('/', quizController.createQuiz);
router.put('/:quizId', quizController.updateQuiz);
router.delete('/:quizId', quizController.deleteQuiz);
router.get('/:quizId/populate', quizController.getQuizWithQuestions);
router.post('/:quizId/question', quizController.addQuestionToQuiz);
router.post('/:quizId/questions', quizController.addQuestionsToQuiz);

export default router;