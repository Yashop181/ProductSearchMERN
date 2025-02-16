const Product = require('../models/Product');

const getProducts = async (req,res) =>{
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createProduct = async (req,res)=>{
    const product = new Product({
        name: req.body.name,
    });
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getProducts,
    createProduct
}