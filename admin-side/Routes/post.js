const { verify } = require("argon2");
const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");

const Post = require("../Models/Post");
const { route } = require("./auth");

// xem danh sách bài viết
router.get("/", verifyToken, async (req, res) => {
    try {
        const posts = await Post.find()
        res.json({ success: true, posts: posts })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

// đăng bài viết
router.post('/', verifyToken, async (req, res) => {
    const { title, description, text, status } = req.body;
    if (!title)
        return res.status(400).json({ success: false, message: "Thiếu title" });
    if (!description)
        return res.status(400).json({ success: false, message: "Thiếu description" });
    if (!text)
        return res.status(400).json({ success: false, message: "Thiếu text" });
    try {
        const newPost = new Post({
            title,
            description,
            text,
            status: status,
            user: req.userId
        });
        await newPost.save()
        res.json({ success: true, message: 'Đăng bài viết thành công', post: newPost });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
});

//sửa bài post theo id
router.put('/:id', verifyToken, async (req, res) => {
    const { title, description, text, status } = req.body
    if (!title)
        return res.status(400).json({ success: false, message: "Thiếu title" });
    if (!description)
        return res.status(400).json({ success: false, message: "Thiếu description" });
    if (!text)
        return res.status(400).json({ success: false, message: "Thiếu text" });
    try {
        let updatedPost = {
            title,
            description: description || '',
            text,
            status: status
        }
        const postUpdateCondition = {
            _id: req.params.id, user: req.userId
        }
        updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, { new: true })
        // người dùng không được phép cập nhật bài đăng
        if (!updatedPost) {
            return res.status(401).json({ success: false, message: 'Bài đăng không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'Oke', post: updatedPost })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

// xóa post
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const postDeleteConditions = { _id: req.params.id, user: req.userId }
        const deletedPost = await Post.findOneAndDelete(postDeleteConditions)
        if (!deletedPost) {
            return res.status(401).json({ success: false, message: 'Bài đăng không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'Oke', post: deletedPost })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})


module.exports = router