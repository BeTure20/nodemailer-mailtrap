const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT_SERVER, err => {
    if(err) throw err;
    console.log(`Server running on port ${process.env.PORT_SERVER}`);
})