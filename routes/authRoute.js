import express from 'express'
import { registerController } from '../controllers/authController.js';
import { loginController } from '../controllers/authController.js';
import { testController } from '../controllers/authController.js';
import { forgotPasswordController } from '../controllers/authController.js';

import { isAdmin, requireSignIn } from '../middleware/authMiddlewar.js';

const router = express.Router();


router.post('/register', registerController)
router.post('/login',loginController)


router.post("/forgot-password", forgotPasswordController);


router.get("/test",requireSignIn, isAdmin ,testController);
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});


router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});


export default router;