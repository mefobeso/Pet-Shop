const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoucherSchema = new Schema({
    VoucherName: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    Value: {
        type: String,
    },
    img:{
        type: String,
    },
    OutDate:{
        type: String,
    },
})

module.exports = mongoose.model('voucher',VoucherSchema);