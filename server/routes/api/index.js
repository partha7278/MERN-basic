
module.exports = function(app){

    const trimmer = require('../../middleware/APIrequestTrimmer');
    const user = require('./user');



    app.use(trimmer);
    app.use('/api/users',user);


    app.use('/api/*',(req,res,next)=>{
        res.status(404).send('Page not found');
    });
}