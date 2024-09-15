import { Router } from 'express';
import * as questionController from '../controllers/questionController';

const router = Router();

router.get('/', questionController.getAllQuestions);
router.get('/:questionId', questionController.getQuestionById);
router.post('/', questionController.createQuestion);
router.put('/:questionId', questionController.updateQuestion);
router.delete('/:questionId', questionController.deleteQuestion);

export default router;