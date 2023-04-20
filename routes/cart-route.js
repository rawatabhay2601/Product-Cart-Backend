const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');

router.post('/products-cart', cartController.postProduct);
router.get('/products-cart/delete-product/:productId', cartController.deleteProduct);
router.get('/products-cart/allProducts',cartController.getProductAll);

module.exports = router;