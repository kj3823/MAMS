const express = require('express-jwt');
const expressJwt = express.expressjwt;
const config = require('../config/config.json');
const _secret = config.secret;
const User = require('../models/users.model').Users


/**
 * JWT Authentication gateway.
 * @param {any} err request body.
 * @param {any} req response object.
 * @param {any} res response object.
 * @param {any} next next object.
 * @return {any} response object.
*/
function jwt() {
  const secret = _secret;
  return expressJwt({secret, algorithms: ['HS256'], isRevoked}).unless({
    path: [
      '/users/login',
      '/users/create',
    ],
  });
}

async function isRevoked(req, payload, done) {
  console.log(req.body.id);
  const user = await User.find({id:req.body.id});
  if (!user) {
    return done(null, false, {message: 'User does not exists!'})
  }
  //return done(null, user, {messsage:'User found!'});
}

