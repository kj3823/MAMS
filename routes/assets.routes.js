const express = require('express');
const assetsController = require('../controllers/assets.controller');
const Router = express.Router();


Router.get('/getviadept', assetsController.deptQuerry);
Router.get('/getviaid',assetsController.idQuerry);

exports.router = Router;