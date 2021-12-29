const Post = require("../Models/Post");
const cloudinary = require("../Utils/Cloudinary");

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
        res.json({ success: true, posts: posts })
        if(post == null){
            return res.status(404).json({message:'Không thể tìm thấy bài viết'})
        }
    } catch (err) {
        res.status(500).json({success: false, message: 'lỗi server' })
    }
}
module.exports.AddPost = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        let newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            img: result.secure_url,
            cloudinary_id: result.public_id,
            text: req.body.text,
            status: req.body.status
        });
        await newPost.save()
        res.json({ success: true, message: 'đăng bài viết thành công', Post: newPost });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.UpdatePost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        await cloudinary.uploader.destroy(post.cloudinary_id);
        const result = await cloudinary.uploader.upload(req.file.path);
        const data = {
            title: req.body.title || post.title,
            description: req.body.description || post.description,
            img: result.secure_url || post.img,
            cloudinary_id: result.public_id || post.cloudinary_id,
            text: req.body.text || post.text,
            status: req.body.status || post.status
        }
        updatedPost = await Post.findByIdAndUpdate(req.params.id, data,{new : true})
        // người dùng không được phép cập nhật bài viết
        if (!updatedPost) {
            return res.status(401).json({ success: false, message: 'bài viết không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'sửa bài viết thành công', Post: updatedPost })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.DeletePost =  async (req, res) => {
    try {
        let deletedPost = await Post.findById(req.params.id);
        await cloudinary.uploader.destroy(deletedPost.cloudinary_id);
        await deletedPost.remove();
        if (!deletedPost) {
            return res.status(401).json({ success: false, message: 'bài viết không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'xóa bài viết thành công', Post: deletedPost })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}