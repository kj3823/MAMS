const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/isAuth')

const adminController = require('../controllers/admin.controller')

// router.post('/create', isAuth, adminController.create)
// router.get('/', isAuth, adminController.get);

exports.router = router;