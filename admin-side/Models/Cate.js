const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CateSchema = new Schema({
    cateName: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('category',CateSchema);