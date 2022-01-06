const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoucherSchema = new Schema({
    voucherName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    value: {
        type: Number,
        required: true
    },
    outDate:{
        type: Date,
        required: true
    },
    countUse:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('voucher',VoucherSchema);