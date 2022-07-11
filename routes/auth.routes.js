const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/isAuth');

const authController = require('../controllers/auth.controller');

router.get('/login' , authController.getLogin);

router.post('/login', authController.postLogin);

router.get('/signup', authController.getSignUp);

router.post('/signup', authController.postSignUp);

router.post('/logout', isAuth, authController.postLogout);

exports.Router = router;