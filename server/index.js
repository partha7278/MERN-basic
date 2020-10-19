const winston = require('winston');
const express = require('express');
const config = require('config');
const path = require('path');
const helmet = require("helmet");
const app = express();
const customCors = require('./middleware/cors');




require('./startup/winstonLogging')();
app.use(helmet());
app.set('trust proxy', 1);

app.use(customCors);
require('./startup/routes')(app);


const port = config.get('port') || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));


module.exports = server;