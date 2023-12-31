// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/adminLogin', userController.adminLogin);
router.post('/updateUserInfo', userController.updateUserInfo);
router.post('/showUserInfo', userController.showUserInfo);
router.post('/applyForDriver', userController.applyForDriver);
router.post('/showMyCar', userController.showMyCar);
router.post('/editMyCar', userController.editMyCar);
router.post('/showMyAct_P', userController.showMyAct_P);
router.post('/showMyAct_D', userController.showMyAct_D);


module.exports = router;