const express = require ('express');
var router = express.Router();
const categoryController = require ('../controllers/category');


router.route('/')
    .get(categoryController.getAllCategories)
    .post(categoryController.createCategory);

router.route('/count')
    .get(categoryController.getNumOfCategories);

router.route('/:name')
    .get(categoryController.getCategoryByName)
    .patch(categoryController.updateCategory)
    .delete(categoryController.removeCategory);

module.exports = router;