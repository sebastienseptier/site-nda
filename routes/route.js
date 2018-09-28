var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../models/User'); // Import User Model Schema

module.exports = (router) => {

    /* GET ALL USERS */
    router.get('/', function (req, res, next) {
        User.find(function (err, products) {
          if (err) return next(err);
          res.json(products);
        });
      });
    
      /* GET SINGLE User BY ID */
      router.get('/:id', function (req, res, next) {
        User.findById(req.params.id, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });
      });
    
      /* SAVE User */
      router.post('/', function (req, res, next) {
        User.create(req.body, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });
      });
    
      /* UPDATE User */
      router.put('/:id', function (req, res, next) {
        User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });
      });
    
      /* DELETE User */
      router.delete('/:id', function (req, res, next) {
        User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });
      });
    /*router.get('/users', (req, res) => {
        User.find((err, users) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(users);
            }
        });
    });

     router.post('/user', (req, res)=>{
         let newUser = new User({
             firstName: req.body.firstName,
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
     router.post('/', function (req, res, next) {
         User.create(req.body, function (err, post) {
           console.log("post : ", post);
           if (err) {
             console.log('post error :', err);
             return next(err);
           }
           res.json(post);
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
 
     router.delete('/user/:id', (req, res,)=>{
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
     });*/

    return router;
    // module.exports = router;
}