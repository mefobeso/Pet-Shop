const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    date:{
        type: Date,
        default: Date.now()
    },
    details: [
        {
            pet: {
                type: Schema.Types.ObjectId,
                ref: 'pet',
            },
            category_name : String,
			pet_name : String,
			price : Number,
            amount: Number,
        }
    ],
    total: Number,
    phone: Number,
    address: String,
    name: String,
});

module.exports = mongoose.model('bill', BillSchema);
