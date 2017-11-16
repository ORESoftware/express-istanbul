

const cov = require('istanbul-middleware');
const express = require('express');
const app = express();
const path = require('path');


const isCollectCoverage = process.env.COLLECT_COVERAGE === 'yes';

if (isCollectCoverage) {
  app.use(express.static(path.join(__dirname, 'public-coverage')));
}
else {
  app.use(express.static(path.join(__dirname, 'public')));
}

if (isCollectCoverage) {
  app.use('/coverage', cov.createHandler()); // mount istanbul middleware here
}


app.listen(6969);