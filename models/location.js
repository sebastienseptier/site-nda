var mongoose = require('mongoose');

/**
* Definition of Location schema.
*/
const LocationSchema = mongoose.Schema({
    locationName: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

const Location = module.exports = mongoose.model('Location', LocationSchema);