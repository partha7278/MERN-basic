const Joi = require('joi');
const logging = require('../logging');
const moment = require('moment');
const query = require('../helper/runQuery');





async function selectFriends(user){

    const joischema = {
        user_id: Joi.number().required().min(1).max(100000000)
    };
    //joi validate
    const { error } = Joi.validate(user, joischema);
    if (error) return {status:'FAILED',statusCode:400,message:error.details[0].message};

    const users = await query(`SELECT users.id,firstName,lastName,avatar FROM friends LEFT JOIN users ON friends.sender = users.id OR friends.receiver = users.id WHERE (friends.sender=? OR friends.receiver=?) AND users.id != ?`,[ user.user_id, user.user_id, user.user_id]);
    if(users.statusCode != 200) return users;

    return users;
}



async function selectFriends2(user){

    const joischema = {
        user_id: Joi.number().required().min(1).max(100000000)
    };
    //joi validate
    const { error } = Joi.validate(user, joischema);
    if (error) return {status:'FAILED',statusCode:400,message:error.details[0].message};

    const users = await query(`SELECT u2.* FROM friends f1 LEFT JOIN users u1 ON f1.sender=u1.id OR f1.receiver=u1.id LEFT JOIN friends f2 ON f2.sender=u1.id OR f2.receiver=u1.id LEFT JOIN users u2 ON f2.sender=u2.id OR f2.receiver=u2.id WHERE (f1.sender=? OR f1.receiver=?) AND u1.id != ? AND u2.id != ? AND u2.id != u1.id`,[ user.user_id, user.user_id, user.user_id, user.user_id]);
    if(users.statusCode != 200) return users;

    return users;
}




async function selectAll(user){
    let pageLimit =6 ;

    const joischema = {
        page: Joi.number().optional()
    };
    //joi validate
    const { error } = Joi.validate(user, joischema);
    if (error) return {status:'FAILED',statusCode:400,message:error.details[0].message};

    let page = 1;
    if(user.page && user.page > 0){
        page = user.page;
    }

    const users = await query(`SELECT id,firstName,lastName,avatar,status,created_at FROM users LIMIT ${pageLimit} ${page ? `OFFSET ${(page -1)*pageLimit}`:''}`,[]);
    if(users.statusCode != 200) return users;

    const totaluser = await query(`SELECT COUNT(id) as total FROM users`,[]);
    if(totaluser.statusCode != 200) return totaluser;
    

    users['page'] = page;
    users['totalUsers'] = totaluser['data'][0]['total'];
    users['totalPage'] = Math.ceil(totaluser['data'][0]['total']/pageLimit);

    return users;
}




module.exports = {
    selectAll,
    selectFriends,
    selectFriends2
};