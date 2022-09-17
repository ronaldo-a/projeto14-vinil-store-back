import express from 'express';
import * as authController from '../controllers/authController.js'
import { validateSession } from '../middlewares/sessionMiddleware.js';
import { validateNewUser, validateLogin } from '../middlewares/userMiddleware.js';

const router = express.Router();

router.post('/signin', validateLogin, authController.signIn)
router.post('/signup', validateNewUser, authController.signUp)
router.delete('/signout', validateSession, authController.signOut)
//router.get('/verifysession', authController.verifySession)

export default router;