import express from 'express';
import * as authController from '../controllers/authController.js'

const router = express.Router();

router.post('/signin', authController.signIn)
router.post('/signup', authController.signUp)
router.delete('/signout', authController.signOut)
router.get('/verifysession', authController.verifySession)

export default router;