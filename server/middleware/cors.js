const config = require('config');

module.exports = async function(req,res,next){

    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', config.get('cors_urls'));


    next();
}