const path = require('path');
const bcrypt = require('bcrypt');

const userServices = require('../services/user.service');
const session = require('express-session');
const User = require('../models/users.model').Users;

exports.getLogin = (req, res, next) =>
{
    req.session.isLoggedIn = false;
    res.sendFile(path.join(__dirname, '../views','login.html'));
}

exports.postLogin = (req, res, next) =>
{
    let message = false;
    const userName = req.body.email;
    const password = req.body.password;
    User.findOne({userName : userName}).then(user =>
        {
            if(!user)
            {
                console.log("User not found");
                return res.send(message);
            }
                bcrypt.compare(password, user.password).then(doMatch =>
                    {
                        if(doMatch)
                        {
                            req.session.user = user;
                            req.session.isLoggedIn = true;
                            return req.session.save(() => // Ensures that the page is only sent when the session object has been written to the database.
                            {
                                message = true;
                                return res.send(message);
                            })
                        }
                        return res.send(message);
                    }).catch(err => 
                        {
                            console.log(err);
                        })
        }).catch(err => {
            console.log("Fuck something went horribly wrong!")
        })
 }

exports.getSignUp = (req, res, next) =>
{
    res.sendFile(path.join(__dirname, '../views','signUp.html'));
}

exports.postSignUp = (req, res, next) =>
{
    const userName = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    User.findOne({userName : userName}).then(user =>
        {
            if(user)
            {
                console.log("User already exists!");
                return res.redirect('/signup');
            }
            bcrypt.hash(password, 12).then(hashedPassword =>
                {
                    const newUser = new User({firstName : firstName, lastName : lastName, userName: userName, password : hashedPassword});
                    newUser.save();
                    return res.redirect('/login');
                }).catch(err =>
                {
                    console.log(err)
                    return res.redirect('/signup');
                })
        }).catch(err => {
            console.log("Fuck something went horribly wrong.")
        })    
}

exports.postLogout = (req, res, next) =>
{
    console.log(req.session.user.userName + " is logged out");
    req.session.destroy(); //destroys the session object;
    return res.redirect('/login');
}