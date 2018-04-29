/**
* User schema import.
*/
const User = require('../models/user'); // Import User Model Schema

module.exports = (router) => {
    /**
    * Routes definition.
    */
    router.get('/users', (req, res)=>{
        User.find((err, users)=>{
            if (err){
                res.json(err);
            }
            else {
                res.json(users);
            }
        });
    });

    router.post('/user', (req, res)=>{
        let newUser = new User({
            userName: req.body.userName,
            userPassword: req.body.userPassword
        });
        newUser.save((err)=>{
            if (err){
                res.json(err);
            }
            else {
                res.json({msg: 'Utilisateur ajouté.'});
            }
        });
    });

    router.put('/user/:id', (req, res)=>{
        User.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set:{
                    userPassword: req.body.userPassword
                }
            },
            (err, result)=>{
                if(err) {
                    res.json(err);
                }
                else {
                    res.json({msg: 'Information mise à jour'});
                }
            }
        )
    });

    router.delete('/user/:id', (req, res)=>{
        User.remove({
            _id: req.params.id
        },
        (err, result)=>{
            if(err) {
                res.json(err);
            }
            else {
                res.json(result);
            }
        });
    });

    return router;
}