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
        enum: ['Khóa','Hoạt động'],
        default:'Hoạt động'
    },
    createdAt: {
        type: Date, 
        default: Date.now()
    },
    role_id:{
        type: String,
        default: '61cea5e5d6d3f5dae84b4406'
    }
});

module.exports = mongoose.model('users',UserSchema);
