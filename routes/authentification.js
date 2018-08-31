const User = require('../models/user'); // Import User Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {
    /**
     * Register route
     */
    router.post('/register', (req, res) => {
        console.log(req.body);
        // Check if email was provided
        if (!req.body.email) {
            res.json({ success: false, message: 'Vous devez fournir une adresse email.' }); // Return error
        } else {
            // Check if firstname and lastname were provided
            if (!req.body.firstName || !req.body.lastName || !req.body.gender) {
                res.json({ success: false, message: 'Vous devez fournir un prénom, un nom et un genre.' }); // Return error
            } else {
                // Check if province and town were provided
                if (!req.body.province || !req.body.town) {
                    res.json({ success: false, message: 'Vous devez fournir un département et une ville.' }); // Return error
                } else {
                    // Check if birthdate was provided
                    if (!req.body.birthDate) {
                        res.json({ success: false, message: 'Vous devez fournir votre date de naissance.' }); // Return error
                    } else {
                        // Check if password was provided
                        if (!req.body.password) {
                            res.json({ success: false, message: 'Vous devez fournir un mot de passe.' }); // Return error
                        } else {
                            // Create new user object and apply user input
                            let user = new User({
                                email: req.body.email,
                                firstName: req.body.firstName,
                                lastName: req.body.lastName,
                                password: req.body.password,
                                promotion: req.body.promotion,
                                province: req.body.province,
                                town: req.body.town,
                                birthDate: req.body.birthDate,
                                gender: req.body.gender,
                                group: req.body.group,
                                grade: req.body.grade,
                                registrationDate: req.body.registrationDate,
                                lastConnection: req.body.lastConnection,
                                profilPicture: req.body.profilPicture,
                                description: req.body.description,
                                changePassword: req.body.changePassword,
                                lockout: req.body.lockout,
                                attempts: req.body.attempts
                            });
                            // Save user to database
                            user.save((err) => {
                                // Check if error occured
                                if (err) {
                                    console.log('err: '+err);
                                    // Check if error is an error indicating duplicate account
                                    if (err.code === 11000) {
                                        res.json({ success: false, message: 'Cette adresse email est déjà utilisée.' }); // Return error
                                    } else {
                                        // Check if error is a validation rror
                                        if (err.errors) {
                                            // Check if validation error is in the email field
                                            if (err.errors.email) {
                                                res.json({ success: false, message: err.errors.email.message }); // Return error
                                            } else {
                                                // Check if validation error is in the username field
                                                if (err.errors.firstName) {
                                                    res.json({ success: false, message: err.errors.firstName.message }); // Return error
                                                } else {
                                                    // Check if validation error is in the password field
                                                    if (err.errors.password) {
                                                        res.json({ success: false, message: err.errors.password.message }); // Return error
                                                    } else {
                                                        res.json({ success: false, message: err }); // Return any other error not already covered
                                                    }
                                                }
                                            }
                                        } else {
                                            res.json({ success: false, message: 'Impossible de sauvegarder l\'utilisateur. Erreur: ', err }); // Return error if not related to validation
                                        }
                                    }
                                } else {
                                    console.log('==> '+user);
                                    res.json({ success: true, message: 'Félicitations, votre compte est enregistré!' }); // Return success
                                }
                            });
                        }
                    }
                }
            }
        }
    });

    /**
     * Login route
     */
    router.post('/login', (req, res) => {
        console.log(req.body);
        // Check if email was provided in paramaters
        if (!req.body.email) {
            res.json({ success: false, message: 'Vous devez fournir une adresse email.' }); // Return error
        } else {
            // Check if password was provided
            if (!req.body.password) {
                res.json({ success: false, message: 'Vous devez fournir un mot de passe.' }); // Return error
            } else { 
                // Check if email exists in database
                User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
                    // Check if error was found
                    if (err) {
                        res.json({ success: false, message: err }); // Return error
                    } else {
                        // Check if email was found
                        if (!user) {
                            res.json({ success: false, message: 'Adresse email inconnue.' }); // Return error
                        } else {
                            const validPassword = user.comparePassword(req.body.password); // Compare password provided to password in database
                            // Check if password is a match
                            if (!validPassword) {
                                res.json({ success: false, message: 'Mot de passe invalide' }); // Return error
                            } else {
                                const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
                                res.json({
                                    success: true,
                                    message: 'Vous vous êtes connecté avec succès!',
                                    token: token,
                                    user: {
                                        id: user._id,
                                        firstName: user.firstName,
                                        lastName: user.lastName
                                    }
                                }); // Return success and token to frontend
                            }
                        }
                    }
                });
            }
        }
    });

    /**
     * MIDDLEWARE - Used to grab user's token from headers
     */
    router.use((req, res, next) => {
        const token = req.headers['authorization']; // Create token found in headers
        // Check if token was found in headers
        if (!token) {
            res.json({ success: false, message: 'Aucun token fourni.' }); // Return error
        } else {
        // Verify the token is valid
        jwt.verify(token, config.secret, (err, decoded) => {
            // Check if error is expired or invalid
            if (err) {
                res.json({ success: false, message: 'Token invalide: ' + err }); // Return error for token validation
            } else {
                req.decoded = decoded; // Create global variable to use in any request beyond
                next(); // Exit middleware
            }
        });
        }
    });

    /**
     * Route to get user's profile data
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

    return router; // Return router object to main index.js
}