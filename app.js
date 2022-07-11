const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session)

const CONNECTION_URL = "mongodb+srv://jjink3823:5lZcBVolSZRMiGv2@cluster0.s0o5toi.mongodb.net/mbits?authMechanism=SCRAM-SHA-1";

//const adminRoutes = require('./routes/admin.routes').router;
const assetRoutes = require('./routes/assets.routes').router;
const authRoutes = require('./routes/auth.routes').Router;
const systemRoutes = require('./routes/system.routes').Router;
const store = mongoDBStore({uri: CONNECTION_URL, session:'session'})
app.use(session({secret:'MY SECRET IS A SECRET', resave: false, saveUninitialized:false, store:store}))

const errorHandler = require('./util/error_handler').errorHandler

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
//app.use('/admin', adminRoutes);
app.use('/assets',assetRoutes);
app.use(authRoutes);
app.use(systemRoutes);
app.use(errorHandler);

const port = process.env.PORT||4000;

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});