const User = require('../models/users.model').Users
const bcrypt = require('bcrypt')

// async function getAll() {
//     return await User.find();
// }

// async function getById(id)
// {
//     return await User.findById(id);
// }

// async function create(userParameter)
// {
//     if(await User.findOne({username: userParameter.username}))
//     return;

//     const user = new User(userParameter)
//     {
//         if(userParameter.password)
//         {
//             user.hash = bcrypt.hashSync(userParameter.password, 10);
//         }
//         await user.save();
//         return user;
//     }
// }

// exports.getById = getById;
// exports.create = create;
// exports.getAll = getAll;


