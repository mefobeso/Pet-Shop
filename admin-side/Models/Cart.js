const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user: {
        type: String,
    },
    date:{
        type: Date,
        default: new Date()
    },
    details: [
        {
            pet: {
                type: String
            },
            category_name : String,
			pet_name : String,
			price : Number,
            amount: Number,
        }
    ],
});

module.exports = mongoose.model('cart', CartSchema);