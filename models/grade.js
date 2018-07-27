var mongoose = require('mongoose');

/**
* Definition of Grade schema.
*/
const GradeSchema = mongoose.Schema({
    gradeName: {
        type: String,
        required: true
    },
    gradeDescription: {
        type: String,
        required: true
    }
});

const Grade = module.exports = mongoose.model('Grade', GradeSchema);