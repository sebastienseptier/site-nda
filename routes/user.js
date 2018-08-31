const User = require('../models/user'); // Import User Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {

    /**
     * Route permettant de récupérer le profile d'un utilisateur par ID.
     */
    router.get('/profile/:id', (req, res) => {
        // Check if id is present in parameters
        if (!req.params.id) {
            res.json({ success: false, message: 'No user ID was provided.' }); // Return error message
        } else {
            // Check if the user id is found in database
            User.findOne({ _id: req.params.id }, (err, user) => {
                // Check if the id is a valid ID
                if (err) {
                    res.json({ success: false, message: 'Not a valid user id' }); // Return error message
                } else {
                    // Check if user was found by id
                    if (!user) {
                        res.json({ success: false, message: 'User not found.' }); // Return error message
                    } else {
                        res.json({ success: true, user: user }); // Return success
                    }
                }
            });
        }
    });

    /**
     * Route permettant de récupérer les profiles de tous les utilisateurs.
     */
    router.get('/allUsers', (req, res) => {
        // Search database for all users
        User.find({}, (err, users) => {
            // Check if error was found or not
            if (err) {
                res.json({ success: false, message: err }); // Return error message
            } else {
                // Check if users were found in database
                if (!users) {
                    res.json({ success: false, message: 'No users found.' }); // Return error of no users found
                } else {
                    res.json({ success: true, users: users }); // Return success and users array
                }
            }
        }).sort({ '_id': -1 }); // Sort users from newest to oldest
    });

    /**
     * Route permettant de metre à jour le profile d'un utilisateur par ID.
     */
    router.put('/updateUser', (req, res) => {
        // Check if id was provided
        if (!req.body._id) {
            res.json({ success: false, message: 'No user id provided' }); // Return error message
        } else {
        // Check if id exists in database
        User.findOne({ _id: req.body._id }, (err, user) => {
            // Check if id is a valid ID
            if (err) {
                res.json({ success: false, message: 'Not a valid user id' }); // Return error message
            } else {
                // Check if id was found in the database
                if (!user) {
                    res.json({ success: false, message: 'User id was not found.' }); // Return error message
                } else {
                    // Check who user is that is requesting user update
                    User.findOne({ _id: req.decoded.id }, (err, userReq) => {
                        // Check if error was found
                        if (err) {
                            res.json({ success: false, message: err }); // Return error message
                        } else {
                            // Check if user was found in the database
                            if (!userReq) {
                                res.json({ success: false, message: 'Unable to authenticate user\'s request.' }); // Return error message
                            } else {
                                // Check if user logged in is the one requesting to update user
                                if (user.id !== userReq.id) {
                                    res.json({ success: false, message: 'You are not authorized to edit this user.' }); // Return error message
                                } else {
                                    user.firstName = req.body.firstName; // Update
                                    user.lastName = req.body.lastName;
                                    user.save((err) => {
                                        if (err) {
                                            if (err.errors) {
                                                res.json({ success: false, message: 'Please ensure form is filled out properly' });
                                            } else {
                                                res.json({ success: false, message: err }); // Return error message
                                            }
                                        } else {
                                            res.json({ success: true, message: 'User Updated!' }); // Return success message
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            }
        });
        }
    });

    /**
     * Route permettant de supprimer le profile d'un utilisateur par ID.
     */
    router.delete('/deleteUser/:id', (req, res) => {
        // Check if ID was provided in parameters
        if (!req.params.id) {
            res.json({ success: false, message: 'No user id provided' }); // Return error message
        } else {
            // Check if id is found in database
            User.findOne({ _id: req.params.id }, (err, user) => {
                // Check if error was found
                if (err) {
                    res.json({ success: false, message: 'Invalid user id' }); // Return error message
                } else {
                    // Check if user was found in database
                    if (!user) {
                        res.json({ success: false, messasge: 'User was not found' }); // Return error message
                    } else {
                        // Get info on user who is attempting to delete user
                        User.findOne({ _id: req.decoded.id }, (err, userReq) => {
                            // Check if error was found
                            if (err) {
                                res.json({ success: false, message: err }); // Return error message
                            } else {
                                // Check if user's id was found in database
                                if (!userReq) {
                                    res.json({ success: false, message: 'Unable to authenticate user\'s request.' }); // Return error message
                                } else {
                                    // Check if user attempting to delete user is the same user
                                    if (user.id !== userReq.id) {
                                        res.json({ success: false, message: 'You are not authorized to delete this user' }); // Return error message
                                    } else {
                                        // Remove the user from database
                                        user.remove((err) => {
                                            if (err) {
                                                res.json({ success: false, message: err }); // Return error message
                                            } else {
                                                res.json({ success: true, message: 'User deleted!' }); // Return success message
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            });
        }
    });

    return router; // Return router object to main app.js
}