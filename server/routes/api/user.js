const express = require('express');
const router = express.Router();
const Quser = require('../../query/user');



router.post('/', async (req,res)=> {
    const result = await Quser.selectAll(req.body);
    return res.json(result);
});


router.get('/friends/:user_id', async (req,res)=> {
    const result = await Quser.selectFriends({'user_id':req.params.user_id});
    return res.json(result);
});



router.get('/friends2/:user_id', async (req,res)=> {
    const result = await Quser.selectFriends2({'user_id':req.params.user_id});
    return res.json(result);
});


module.exports = router;