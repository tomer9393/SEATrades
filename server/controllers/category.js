const categoryService = require('../services/category');


const createCategory = async (req, res) => {
    const newCategory = await categoryService.createCategory(req.body.name);
    if (!newCategory) {
        return res.status(501).json("No category created");
    }
    res.json(newCategory);
};

const getCategoryById = async (req, res) => {
    if (!req.params.id) {
        res.status(400).json("Category id is required");
    }
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) {
        return res.status(404).json("Category not found");
    }

    res.json(category);
};

const updateCategory = async (req, res) => {
    if (!req.params.id) {
        res.status(400).json("Category id is required");
    }

    const category = await categoryService.updateCategory(req.params.id);
    if (!category) {
        return res.status(404).json("Category not found");
    }

    res.json(category);
};

const removeCategory = async (req, res) => {
    if (!req.params.id) {
        res.status(400).json("Category id is required");
    }
    const category = await categoryService.removeCategory(req.params.id);
    if (!category) {
        return res.status(404).json("Category not found");
    }
    res.send();
};

const getAllCategories = async (req, res) => {
    const categories = await categoryService.getAllCategories();
    if (!categories) {
        return res.status(500).json("Category not found");
    }
    res.json(categories);
};

const getNumOfCategories = async (req, res) => {
    const count = await categoryService.getNumOfCategories();
    if (!count) {
        return res.send(0);
    }
    res.json(count);
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    removeCategory,
    getNumOfCategories
}

