const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    text: {
        type: String,
    },
    UploadDate: {
        type: Date, 
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['Chó','Mèo','Hamster']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    }
})

module.exports = mongoose.model('posts',PostSchema);