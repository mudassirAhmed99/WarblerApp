// ## Connect and Setup to Database
const mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/warbler-app',{
    keepAlive: true,
    useMongoClient: true
});