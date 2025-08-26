require('dotenv').config();
const express = require('express');

const app = express();

const routes = require('./routes/routes');
app.use('/', routes); 

app.listen(process.env.PORT || 3000);