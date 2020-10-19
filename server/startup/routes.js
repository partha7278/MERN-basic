

module.exports = function(app){

    const express = require('express');
    const error = require('../middleware/error');
    const api = require('../routes/api/index');

    app.use(express.json());
    
    
    //api routes
    api(app);

    //errors
    app.use(error);
}