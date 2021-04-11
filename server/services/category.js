const Category = require('../models/category');

const createCategory = async (name) => {
    const isExist = await getCategoryByName(name);
    if(isExist.length > 0) {
        return null;
    }

    const category = new Category({ name: name });

    let categoryDocument = await category.save();

    return categoryDocument;
}

const getCategoryByName = async (name) => {
    return await Category.find({ name: name });
}

const updateCategory = async (name) => {
    const category = await getCategoryByName(name);
    if (!category)
        return null;

    category.name = name; 
    return await category.save();
}

const removeCategory = async (name) => {
    const category = await getCategoryByName(name);
    if (!category)
        return null;

    return await category.remove();

}

const getAllCategories = async () => {
    return await Category.find();
}

const getNumOfCategories = async () => {
    return await Category.countDocuments();
}
 
module.exports = {
    createCategory,
    getAllCategories,
    getCategoryByName,
    updateCategory,
    removeCategory,
    getNumOfCategories
}


