const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { response } = require('express');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const messagesRoutes = require('./routes/messages');

const PORT = 8081;
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/users/:id/messages', messagesRoutes);

// all my routes here. they will come later

app.use(function(req,res,next){
    let error = new Error('Not Found');
    error.status = 404;
    next(error);
})
app.use(errorHandler);

app.listen(PORT, () =>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})