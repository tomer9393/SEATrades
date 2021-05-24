const express = require('express');
const userController = require('../controllers/user');
var router = express.Router();


/**
 * get - get all users
 * http://localhost:8081/users
 */
router.route('/')
 .get(userController.getUsers); //V

/**
 * post - create a new user
 * http://localhost:8081/users/signup
 */
router.route("/signup").post(userController.createUser);

/**
 * post - login to an existing user
 * http://localhost:8081/users/login
 */
 router.route("/login").post(userController.login);

/**
 * get user by email, first name and last name 
 * param - email=firstName=lastName
 * http://localhost:8081/users/getUserByParam/:param
 */
router.route('/getUserByParam/:param')
    .get(userController.getUserByParam); //V


/**
 * Counter of all the users
 * http://localhost:8081/users/countUsers
 */
router.route('/countUsers')
    .get(userController.countUsers); //V

/**
 * get user by email
 * http://localhost:8081/users/getUserByEmail/:email
 */
router.route('/getUserByEmail/:email')
    .get(userController.getUserByEmail) //V


/**
 * get user by id
 * http://localhost:8081/users/getUserById/:id
 */
router.route('/getUserById/:id')
    .get(userController.getUserById) //V


/**
 * get - get user by user id
 * delete - delete user by user id
 * patch - update user by user id
 * http://localhost:8081/users/:id
 */
router.route('/:id')
    .get(userController.getUserById) //V
    .delete(userController.deleteUser) //V
    .patch(userController.updateUser); //V

router.route("/update/TicketOfUser")
    .patch(userController.updateTicketOfUser);

module.exports = router;