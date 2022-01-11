
const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const upload = require("../Utils/multer");

const PostsController = require("../Controllers/PostsController")
const { route } = require("./auth");

// xem danh sách bài viết
router.get("/", PostsController.GetPosts)

//xem bài viết
router.get("/:id", PostsController.GetDetailPost)

// đăng bài viết
router.post('/',  verifyToken,PostsController.AddPost);

//sửa bài post theo id
router.put('/:id',  verifyToken, PostsController.UpdatePost)  

// xóa post
router.delete('/:id',verifyToken,  PostsController.DeletePost)

module.exports = router