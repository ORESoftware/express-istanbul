const cov = require('istanbul-middleware');
const express = require('express');
const app = express();

app.use('/coverage', cov.createHandler()); // mount istanbul middleware here

app.listen(6969);


// that's all folks, lol