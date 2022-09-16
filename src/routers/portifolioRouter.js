import express from 'express';
import * as portifolioController from '../controllers/portifolioController.js'

const router = express.Router();
router.get('/home',portifolioController.getPortifolio)
router.get('/cart', portifolioController.getCart)
router.post('/cart', portifolioController.insertProduct)
router.delete('/cart/:id', portifolioController.deleteProduct)

export default router;