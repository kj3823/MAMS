const jsonwebtoken = require('jsonwebtoken');
const sign = jsonwebtoken.sign;
const config = require('../config/config.json')

const User = require('../util/util.database').Users
