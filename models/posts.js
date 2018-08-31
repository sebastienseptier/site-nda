/**
 * Posts schema
 */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// Validate Function to check blog title length
let titleLengthChecker = (title) => {
    // Check if blog title exists
    if (!title) {
        return false; // Return error
    } else {
        // Check the length of title
        if (title.length < 5 || title.length > 50) {
        return false; // Return error if not within proper length
        } else {
        return true; // Return as valid title
        }
    }
};

// Validate Function to check if valid title format
let alphaNumericTitleChecker = (title) => {
    // Check if title exists
    if (!title) {
        return false; // Return error
    } else {
        // Regular expression to test for a valid title
        const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        return regExp.test(title); // Return regular expression test results (true or false)
    }
};

// Array of Title Validators
const titleValidators = [
    // First Title Validator
    {
        validator: titleLengthChecker,
        message: 'Title must be more than 5 characters but no more than 50'
    },
    // Second Title Validator
    {
        validator: alphaNumericTitleChecker,
        message: 'Title must be alphanumeric'
    }
];

// Validate Function to check content length
let contentLengthChecker = (content) => {
    // Check if content exists
    if (!content) {
        return false; // Return error
    } else {
        // Check length of content
        if (content.length < 5 || content.length > 500) {
        return false; // Return error if does not meet length requirement
        } else {
        return true; // Return as valid content
        }
    }
};

// Array of Content validators
const contentValidators = [
    // First Content validator
    {
        validator: contentLengthChecker,
        message: 'Content must be more than 5 characters but no more than 500.'
    }
];

// Post Model Definition
const postSchema = new Schema({
    title: { type: String, required: true, validate: titleValidators },
    content: { type: String, required: true, validate: bodyValidators },
    author: { type: String, required: true, },
    date: { type: Date, default: Date.now() },
    coverPictureLink: { type: String },
    tag: { type: String }
});

// Export Module/Schema
module.exports = mongoose.model('Post', postSchema);