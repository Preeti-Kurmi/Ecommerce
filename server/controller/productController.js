const Product = require("../models/productModel");

// Get Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add Product
const addProduct = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;
        const image = req.file ? req.file.filename : null;

        if (!image) {
            return res.status(400).json({ message: "Image is required" });
        }

        const product = await Product.create({
            name,
            price,
            description,
            category,
            image,
        });

        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    const _id = req.params.id;
    const { name, price, description, category } = req.body;

    try {
        const updatedData = { name, price, description, category };
        if (req.file) updatedData.image = req.file.filename;

        const product = await Product.findByIdAndUpdate(_id, updatedData, { new: true });
        if (!product) return res.status(404).json({ message: "Product not found" });

        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Product
const deleteProduct = async (req, res) => {
    const  _id  = req.params.id;
    console.log("id",_id)

    try {
        const product = await Product.findByIdAndDelete(_id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
