var mongoose = require('mongoose');

/**
* Definition of User schema.
*/
const UserSchema = mongoose.Schema({
    idLocation: {
        type: Number,
        required: true
    },
    idGroup: {
        type: Number,
        required: true
    },
    idGrade: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String,
            capitalize: true,
            required: true
        },
        lastName: {
            type: String,
            uppercase: true,
            required: true
        },
        birthName: {
            type: String,
            uppercase: true,
            required: true
        }
    },
    birthday: {
        type: Date,
        required: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    lastConnection: {
        type: Date,
        default: Date.now
    },
    isConnected: {
        type: Boolean,
        required: true
    },
    profilPicture: {
        type: String,
        required: true
    },
    userDescripion: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    changePassword: {
        type: Boolean,
        required: true
    },
    lockout: {
        type: Boolean,
        required: true
    },
    attempts: {
        type: Boolean,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
});

/*const User = */module.exports = mongoose.model('User', UserSchema);