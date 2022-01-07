const Post = require("../Models/Post");
const cloudinary = require("../Utils/cloudinary");
const lodash = require("lodash")

module.exports.GetPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json({ success: true, posts: posts })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.GetDetailPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json({ success: true, post })
       
    } catch (err) {
        res.status(500).json({success: false, message: 'lỗi server' })
    }
}
module.exports.AddPost = async (req, res) => {
    try {
        
        await Post.create(req.body)
        res.json({ success: true, message: 'đăng bài viết thành công' });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.UpdatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        lodash.extend(post,req.body)           
           post && post.save();
            res.status(200).json({ success: true, message: 'Thay đổi thành công'})
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.DeletePost =  async (req, res) => {
    try {
        let deletedPost = await Post.findById(req.params.id);
        await deletedPost.remove();
        if (!deletedPost) {
            return res.status(401).json({ success: false, message: 'Bài viết không tồn tại' })
        } else {
            res.json({ success: true, message: 'Xóa bài viết thành công', Post: deletedPost })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}