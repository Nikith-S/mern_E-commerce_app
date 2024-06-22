import express from 'express'
import { registerController } from '../controllers/authController.js';
import { loginController } from '../controllers/authController.js';
import { testController } from '../controllers/authController.js';

import { isAdmin, requireSignIn } from '../middleware/authMiddlewar.js';

const router = express.Router();


router.post('/register', registerController)
router.post('/login',loginController)

router.get('/test',requireSignIn,isAdmin, testController)


export default router;