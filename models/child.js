const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ChildSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('child', ChildSchema);