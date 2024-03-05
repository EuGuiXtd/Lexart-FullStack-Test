const express = require('express');

const router = express.Router();

const validateJwt = require('../middlewares/jwtValidations/validateToken')

const productController = require('../controllers/product.controller');

router.get('/', validateJwt,productController.getAllProducts);
router.post('/', validateJwt,productController.createProduct);
router.put('/:id', validateJwt,productController.updateProduct);
router.delete('/:id', validateJwt,productController.deleteProduct);

module.exports = router;