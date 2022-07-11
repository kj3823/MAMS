const express = require('express');
const router = express.Router();

const systemControllers = require('../controllers/system.controller');
const isAuth = require('../middlewares/isAuth');

router.get('/',isAuth, systemControllers.getHomePage);

exports.Router = router;