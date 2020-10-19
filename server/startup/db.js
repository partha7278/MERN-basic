var mysql = require('mysql');
const logging = require('../logging');
const config = require('config');


module.exports = function(){

    var pool  = mysql.createPool(config.get('dbConnection'));

    pool.getConnection(function(err, connection) {
        if (err) logging(err,'DB connection','error');
    });

    return pool;
}