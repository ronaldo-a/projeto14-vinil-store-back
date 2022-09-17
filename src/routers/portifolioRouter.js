import express from 'express';
import * as portifolioController from '../controllers/portifolioController.js'
import { validateSession } from '../middlewares/sessionMiddleware.js';

const router = express.Router();
router.get('/home',portifolioController.getPortifolio)
router.get('/cart', validateSession, portifolioController.getCart)
router.post('/cart', validateSession, portifolioController.insertProduct)
router.delete('/cart/:id', validateSession, portifolioController.deleteProduct)
router.put('/changeqtd', validateSession, portifolioController.changeQtd)

export default router;