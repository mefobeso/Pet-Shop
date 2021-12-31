const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    cate_id:{
        type: String,
        required: true,
        ref: 'category'
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
        type: Number,
    },
    amount:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        enum: ['Còn hàng','Hết hàng'],
        default:"Còn hàng"
    }
})

module.exports = mongoose.model('product',ProductSchema);