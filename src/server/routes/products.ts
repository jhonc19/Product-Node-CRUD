import { Router } from 'express';
import {
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  insertProduct,
} from '../controller/products.controller';

const router = Router();

router.get('/product', getProducts);
router.get('/product/:id', getProduct);
router.put('/product/', updateProduct);
router.post('/product/', insertProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;
