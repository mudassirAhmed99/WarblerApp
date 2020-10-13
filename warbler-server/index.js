const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { response } = require('express');
const errorHandler = require('./handlers/error')

const PORT = 8081;
app.use(cors());
app.use(bodyParser.json());

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