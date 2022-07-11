const mongoose = require('mongoose');
const Users = require('../models/users.model').Users 
const Assets = require('../models/assets.model').Assets
const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
const CONNECTION_URL = "mongodb+srv://jjink3823:5lZcBVolSZRMiGv2@cluster0.s0o5toi.mongodb.net/mbits?authMechanism=SCRAM-SHA-1";
mongoose.connect(CONNECTION_URL, connectionOptions)
.then(()=>
{
    console.log("Connected to database");
}).catch(e => {
    console.log("Error in connecting to database")
    console.log(e)
})
module.exports = {
    Users : Users,
    Assets : Assets
}