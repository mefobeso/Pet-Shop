const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nameProduct:{
        type: String,
        required: true,
        unique: true,
    },
    cateName:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    img:{
        type: Array,
        required: true,
    },
    rating:{
        type: Double,
    },
    amount:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        enum: ['ẩn','hoạt động'],
    }
})

module.exports = mongoose.model('product',ProductSchema);