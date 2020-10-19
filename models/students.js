var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: { type: String, required: true },
    grade: { type: String, default: null },
    userID: { type: Schema.Types.ObjectId, ref: "User" },
    date: { type: String, default: '00/00/00' },
    subjects: {type: String, default: null},
    readingLog: { type: String, default: 'Title and pages read' },
    notes: {type: String, default: 'Type notes here'}

},
    {
        timestamps: true
    });

module.exports = mongoose.model('Student', studentSchema);