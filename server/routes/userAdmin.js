const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userAdmin");
//router.get("/:id", UserController.getUser);
//router.post("/signup", UserController.createUser);
//router.post("/login", UserController.userLogin);
//router.post("/adminLogin", UserController.adminLogin);
//router.get("", UserController.getUsers);
//router.put("/update", UserController.updateUser);
//router.put("/updateAdmin", UserController.updateAdmin);
//router.put("/updateByUserId", UserController.updateByUserId);
//router.delete("/deleteUser", UserController.deleteUser);
//router.delete("/deleteUserByAdmin/:id", UserController.deleteUserByAdmin);

router.route('/')
    .get(UserController.getUsers)
    .post(UserController.createUser);

router.route('/updateAdmin')
    .put(UserController.updateAdmin);

router.route('/updateByUserId')
    .put(UserController.updateByUserId);

router.route('/adminLogin')
    .post(UserController.adminLogin);

router.route('/login')
    .post(UserController.userLogin);

router.route('/deleteUserByAdmin/:id')
    .delete(UserController.deleteUserByAdmin);

router.route('/id/:id')
    .get(UserController.getUser)
    .patch(UserController.updateUser)
    .delete(UserController.deleteUser);

module.exports = router;