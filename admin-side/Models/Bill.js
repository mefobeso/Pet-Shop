const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillSchema = new Schema({
  user_id: {
    type: String,
    ref: "user",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  details: [
    {
      _id: false,
      product_id: {
        type: String,
        ref: "Product",
        required: true,
      },
      amount: {
        default: 1,
        type: Number,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice:{
    type:Number,
    required: true,
  },
  phone: Number,
  address: String,
  name: String,
  paymentTMethod:{
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  note: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("bill", BillSchema);
