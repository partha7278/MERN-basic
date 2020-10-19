const config = require('config');
const winston = require('winston');
const logging = require('../logging');

module.exports = function(){

    require('express-async-errors');


    process.on('unhandledRejection',(ex)=> { logging(ex,'System unhandled','error'); });
    winston.add( new winston.transports.Console({level:"info",handleExceptions: true}) );
    
} 