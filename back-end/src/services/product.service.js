const { Product } = require('../models/');

const getAllProducts = async () => {
    const allProducts = await Product.findAll();
    return allProducts;
}

const createProduct = async (name, details, brand, model, data, price, color) => {
    const newProduct = await Product.create({ name, details, brand, model, data, price, color });
    return newProduct;
}

const updateProduct = async (id, name, details, brand, model, data, price, color) => {
    const updatedProduct = await Product.update({ name, details, brand, model, data, price, color }, { where: { id } });
    return updatedProduct;
}

const deleteProduct = async (id) => { 
    const deletedProduct = await Product.destroy({ where: { id } });
    return deletedProduct;
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};