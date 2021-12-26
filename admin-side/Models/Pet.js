const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
    namepet: {
        type: String,
    },
    cateName: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'category'
    },
    price: {
        type: String,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },
    rating: {
        type: String,
    },
    amount: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['ẩn', 'hoạt động'],
    }
})

module.exports = mongoose.model('pet', petSchema);