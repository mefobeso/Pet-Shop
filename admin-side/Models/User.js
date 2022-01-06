const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

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
    email: {
        type: String,
        required: true,
        validate: validateEmail,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    }
    ,
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
