const pool= require('../startup/db')();
const logging = require('../logging');


module.exports = async function(query,parameter=[],successMessage=''){

    return new Promise((resolve,reject)=> {
        pool.query(query,parameter, function (error, results, fields) {
            if(error){
                error.query = query;
                logging(error,'DB query','error');
                return resolve({status:'FAILED',statusCode:500,message: 'Something went wrong',err:error});
            }

            let rowcount = 0;
            if(results.affectedRows == 0 || results.affectedRows){
                rowcount = results.affectedRows;
            }else{
                rowcount = results.length;
            }
            
            return resolve({ status:'SUCCESS',statusCode:200,message:successMessage,rowCount:rowcount,data:JSON.parse(JSON.stringify(results)) });
        });
    });
}