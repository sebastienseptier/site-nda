var mongoose = require('mongoose');

/**
* Definition of User schema.
*/
const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);