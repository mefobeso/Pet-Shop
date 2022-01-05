const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoucherSchema = new Schema({
    voucherName: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    value: {
        type: String,
    },
    img:{
        type: String,
    },
    outDate:{
        type: Date,
    },
})

module.exports = mongoose.model('voucher',VoucherSchema);