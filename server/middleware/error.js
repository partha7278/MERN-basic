const logging = require('../logging');

module.exports = function (err, req, res ,next){
    logging(err,'system','error');

    return res.status(500).send('Something failed');
}