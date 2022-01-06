const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  text: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  img: {
    type: Array,
  },
  UploadDate: {
    type: Date,
    default: Date.now(),
  },
  user_id: {
    type: String,
    ref: "users",
    default: "61ceeba7524d7641f2801706",
  },
});

module.exports = mongoose.model("posts", PostSchema);
