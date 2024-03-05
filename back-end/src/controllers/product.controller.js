const productService = require('../services/product.service');

const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
}

const createProduct = async (req, res) => {
    const { name, details, brand, model, data, price, color } = req.body;
    const newProduct = await productService.createProduct( name, details, brand, model, data, price, color );
    res.status(201).json(newProduct);
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, details, brand, model, data, price, color } = req.body;
    const updatedProduct = await productService.updateProduct(id, name, details, brand, model, data, price, color);
    res.status(200).json(updatedProduct);
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await productService.deleteProduct(id);
    res.status(204).json(deletedProduct);
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};