const User = require('../models/user'); // Import User Model Schema
const Post = require('../models/post'); // Import Post Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {

    /**
     * Route permettant de créer un nouveau post.
     */
    router.post('/newPost', (req, res) => {
        // Check if post title was provided
        if (!req.body.title) {
            res.json({ success: false, message: 'Post title is required.' }); // Return error message
        } else {
            // Check if post content was provided
            if (!req.body.content) {
                res.json({ success: false, message: 'Post content is required.' }); // Return error message
            } else {
                // Check if post's creator was provided
                if (!req.body.createdBy) {
                    res.json({ success: false, message: 'Post creator is required.' }); // Return error
                } else {
                    // Create the post object for insertion into database
                    const post = new Post({
                        title: req.body.title,
                        content: req.body.content,
                        author: req.body.author
                    });
                    // Save post into database
                    post.save((err) => {
                        // Check if error
                        if (err) {
                            // Check if error is a validation error
                            if (err.errors) {
                                // Check if validation error is in the title field
                                if (err.errors.title) {
                                    res.json({ success: false, message: err.errors.title.message }); // Return error message
                                } else {
                                    // Check if validation error is in the content field
                                    if (err.errors.content) {
                                        res.json({ success: false, message: err.errors.content.message }); // Return error message
                                    } else {
                                        res.json({ success: false, message: err }); // Return general error message
                                    }
                                }
                            } else {
                                res.json({ success: false, message: err }); // Return general error message
                            }
                        } else {
                            res.json({ success: true, message: 'Post saved!' }); // Return success message
                        }
                    });
                }
            }
        }
    });

    /**
     * Route permettant de récupérer tous les posts.
     */
    router.get('/allPosts', (req, res) => {
        // Search database for all posts
        Post.find({}, (err, posts) => {
            // Check if error was found or not
            if (err) {
                res.json({ success: false, message: err }); // Return error message
            } else {
                // Check if postp were found in database
                if (!posts) {
                    res.json({ success: false, message: 'No posts found.' }); // Return error of no posts found
                } else {
                    res.json({ success: true, posts: posts }); // Return success and posts array
                }
            }
        }).sort({ '_id': -1 }); // Sort posts from newest to oldest
    });

    /**
     * Route permettant de récupérer un post par son ID.
     */
    router.get('/post/:id', (req, res) => {
        // Check if id is present in parameters
        if (!req.params.id) {
            res.json({ success: false, message: 'No post ID was provided.' }); // Return error message
        } else {
            // Check if the post id is found in database
            Post.findOne({ _id: req.params.id }, (err, post) => {
                // Check if the id is a valid ID
                if (err) {
                    res.json({ success: false, message: 'Not a valid post id' }); // Return error message
                } else {
                    // Check if post was found by id
                    if (!post) {
                        res.json({ success: false, message: 'Post not found.' }); // Return error message
                    } else {
                        res.json({ success: true, post: post }); // Return success
                    }
                }
            });
        }
    });

    /**
     * Route permettant de mettre à jour un post par son ID.
     */
    router.put('/updatePost', (req, res) => {
        // Check if id was provided
        if (!req.body._id) {
            res.json({ success: false, message: 'No post id provided' }); // Return error message
        } else {
            // Check if id exists in database
            Post.findOne({ _id: req.body._id }, (err, post) => {
                // Check if id is a valid ID
                if (err) {
                    res.json({ success: false, message: 'Not a valid post id' }); // Return error message
                } else {
                    // Check if id was found in the database
                    if (!post) {
                        res.json({ success: false, message: 'Post id was not found.' }); // Return error message
                    } else {
                        // Check who user is that is requesting post update
                        User.findOne({ _id: req.decoded.id }, (err, user) => {
                            // Check if error was found
                            if (err) {
                                res.json({ success: false, message: err }); // Return error message
                            } else {
                                // Check if user was found in the database
                                if (!user) {
                                    res.json({ success: false, message: 'Unable to authenticate user.' }); // Return error message
                                } else {
                                    // Check if user logged in the the one requesting to update post
                                    if (user.id !== post.author) {
                                        res.json({ success: false, message: 'You are not authorized to edit this post.' }); // Return error message
                                    } else {
                                        post.title = req.body.title; // Update
                                        post.content = req.body.content;
                                        post.save((err) => {
                                            if (err) {
                                                if (err.errors) {
                                                    res.json({ success: false, message: 'Please ensure form is filled out properly' });
                                                } else {
                                                    res.json({ success: false, message: err }); // Return error message
                                                }
                                            } else {
                                                res.json({ success: true, message: 'Post Updated!' }); // Return success message
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
     * Route permettant de supprimer un post par son ID.
     */
    router.delete('/deletePost/:id', (req, res) => {
        // Check if ID was provided in parameters
        if (!req.params.id) {
            res.json({ success: false, message: 'No id provided' }); // Return error message
        } else {
            // Check if id is found in database
            Post.findOne({ _id: req.params.id }, (err, post) => {
                // Check if error was found
                if (err) {
                    res.json({ success: false, message: 'Invalid post id' }); // Return error message
                } else {
                    // Check if post was found in database
                    if (!post) {
                        res.json({ success: false, messasge: 'Post was not found' }); // Return error message
                    } else {
                        // Get info on user who is attempting to delete post
                        User.findOne({ _id: req.decoded.id }, (err, user) => {
                            // Check if error was found
                            if (err) {
                                res.json({ success: false, message: err }); // Return error message
                            } else {
                                // Check if user's id was found in database
                                if (!user) {
                                    res.json({ success: false, message: 'Unable to authenticate user.' }); // Return error message
                                } else {
                                    // Check if user attempting to delete post is the same user who originally posted the post
                                    if (user.id !== post.author) {
                                        res.json({ success: false, message: 'You are not authorized to delete this post' }); // Return error message
                                    } else {
                                        // Remove the post from database
                                        post.remove((err) => {
                                            if (err) {
                                                res.json({ success: false, message: err }); // Return error message
                                            } else {
                                                res.json({ success: true, message: 'Post deleted!' }); // Return success message
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
};