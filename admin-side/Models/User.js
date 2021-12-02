const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Khóa','Hoạt động']
    },
    createdAt: {
        type: Date, 
        default: Date.now()
    }
});

module.exports = mongoose.model('users',UserSchema);
