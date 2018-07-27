var mongoose = require('mongoose');

/**
* Definition of Group schema.
*/
const GroupSchema = mongoose.Schema({
    groupName: {
        type: String,
        required: true
    }
});

const Group = module.exports = mongoose.model('Group', GroupSchema);