"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controller/products.controller");
const router = express_1.Router();
router.get('/product', products_controller_1.getProducts);
router.get('/product/:id', products_controller_1.getProduct);
router.put('/product/', products_controller_1.updateProduct);
router.post('/product/', products_controller_1.insertProduct);
router.delete('/product/:id', products_controller_1.deleteProduct);
module.exports = router;
//# sourceMappingURL=products.js.map