const cov = require('istanbul-middleware');
const express = require('express');
const app = express();
const path = require('path');

app.use('/coverage', cov.createHandler()); // mount istanbul middleware here

app.listen(6969);