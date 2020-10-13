const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8081;
app.use(cors());
app.use(bodyParser.json());

// all my routes here. they will come later

app.listen(PORT, () =>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})