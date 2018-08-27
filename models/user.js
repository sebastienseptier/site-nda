/**
 * User schema
 */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose
const bcrypt = require('bcryptjs'); // A native JS bcrypt library for NodeJS
var BCRYPT_SALT_ROUNDS = 12;

// Validate Function to check e-mail length
let emailLengthChecker = (email) => {
    // Check if e-mail exists
    if (!email) {
        return false; // Return error
    } else {
        // Check the length of e-mail string
        if (email.length < 5 || email.length > 30) {
            return false; // Return error if not within proper length
        } else {
            return true; // Return as valid e-mail
        }
    }
};

// Validate Function to check if valid e-mail format
let validEmailChecker = (email) => {
    // Check if e-mail exists
    if (!email) {
        return false; // Return error
    } else {
        // Regular expression to test for a valid e-mail
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email); // Return regular expression test results (true or false)
    }
};

// Array of Email Validators
const emailValidators = [
    // First Email Validator
    {
        validator: emailLengthChecker,
        message: 'E-mail must be at least 5 characters but no more than 30'
    },
    // Second Email Validator
    {
        validator: validEmailChecker,
        message: 'Must be a valid e-mail'
    }
];

// Validate Function to check firstname length
let firstNameLengthChecker = (firstName) => {
    // Check if firstname exists
    if (!firstName) {
        return false; // Return error
    } else {
        // Check length of firstname string
        if (firstName.length < 3 || firstName.length > 15) {
            return false; // Return error if does not meet length requirement
        } else {
            return true; // Return as valid firstname
        }
    }
};

// Validate Function to check lastname length
let lastNameLengthChecker = (firstName) => {
    // Check if lastname exists
    if (!lastName) {
        return false; // Return error
    } else {
        // Check length of lastname string
        if (lastName.length < 3 || lastName.length > 15) {
            return false; // Return error if does not meet length requirement
        } else {
            return true; // Return as valid lastname
        }
    }
};

// Validate Function to check if valid firstname format
let validFirstName = (firstName) => {
    // Check if firstname exists
    if (!firstName) {
        return false; // Return error
    } else {
        // Regular expression to test if firstname format is valid
        const regExp = new RegExp(/^[a-zA-Z]+$/);
        return regExp.test(firstName); // Return regular expression test result (true or false)
    }
};

// Validate Function to check if valid lastname format
let validLastName = (firstName) => {
    // Check if lastname exists
    if (!lastName) {
        return false; // Return error
    } else {
        // Regular expression to test if lastname format is valid
        const regExp = new RegExp(/^[a-zA-Z]+$/);
        return regExp.test(lastName); // Return regular expression test result (true or false)
    }
};

// Array of firstname validators
const firstNameValidators = [
    // First firstname validator
    {
        validator: firstNameLengthChecker,
        message: 'Firstname must be at least 3 characters but no more than 15'
    },
    // Second firstname validator
    {
        validator: validFirstName,
        message: 'Firstname must not have any special characters'
    }
];

// Array of lastname validators
const lastNameValidators = [
    // First lastname validator
    {
        validator: lastNameLengthChecker,
        message: 'Lastname must be at least 3 characters but no more than 15'
    },
    // Second lastname validator
    {
        validator: validLastName,
        message: 'Lastname must not have any special characters'
    }
];

// Validate Function to check password length
let passwordLengthChecker = (password) => {
    // Check if password exists
    if (!password) {
        return false; // Return error
    } else {
        // Check password length
        if (password.length < 8 || password.length > 35) {
            return false; // Return error if passord length requirement is not met
        } else {
            return true; // Return password as valid
        }
    }
};

// Validate Function to check if valid password format
let validPassword = (password) => {
    // Check if password exists
    if (!password) {
        return false; // Return error
    } else {
        // Regular Expression to test if password is valid format
        const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        return regExp.test(password); // Return regular expression test result (true or false)
    }
};

// Array of Password validators
const passwordValidators = [
    // First password validator
    {
        validator: passwordLengthChecker,
        message: 'Password must be at least 8 characters but no more than 35'
    },
    // Second password validator
    {
        validator: validPassword,
        message: 'Must have at least one uppercase, lowercase, special character, and number'
    }
];

// User Model Definition
const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, validate: emailValidators },
    firstName: { type: String, required: true, lowercase: true, validate: firstNameValidators },
    lastName: { type: String, required: true, lowercase: true, validate: lastNameValidators },
    password: { type: String, required: true, validate: passwordValidators }
});

// Schema Middleware to Encrypt Password
userSchema.pre('save', function(next) {
    // Ensure password is new or modified before applying encryption
    if (!this.isModified('password'))
        return next();
    // Apply encryption
    bcrypt.hash(this.password, BCRYPT_SALT_ROUNDS, (err, hash) => {
        if (err) return next(err); // Ensure no errors
        this.password = hash; // Apply encryption to password
        next(); // Exit middleware
    });
});

// Methods to compare password to encrypted password upon login
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password); // Return comparison of login password to password in database (true or false)
};

// Export Module/Schema
module.exports = mongoose.model('User', userSchema);