const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const cloudinary = require("../Utils/Cloudinary");
const upload = require("../Utils/multer");
const cate = require("../Models/Cate");

// xem danh sách loại thú cưng
router.get("/", verifyToken, async (req, res) => {
    try {
        const cates = await cate.find()
        res.json({ success: true, cates: cates })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

// thêm loại thú cưng
router.post('/', verifyToken, upload.single("image"), async (req, res) => {
    try {
        let newcate = new cate({
            cateName: req.body.cateName,
        });
        await newcate.save()
        res.json({ success: true, message: 'thêm loại thú cưng thành công', cate: newcate });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
});

//sửa sản phẩm theo id
router.put('/:id', verifyToken, upload.single("image"), async (req, res) => {
    try {
        let cate = await cate.findById(req.params.id);
        const data = {
            cateName: req.body.cateName || cate.cateName,
        }
        updatedcate = await cate.findByIdAndUpdate(req.params.id, data,{new : true})
        // người dùng không được phép cập nhật sản phẩm
        if (!updatedcate) {
            return res.status(401).json({ success: false, message: 'loại thú cưng không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'sửa loại thú cưng thành công', cate: updatedcate })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

// xóa cate
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        let deletedcate = await cate.findById(req.params.id);
        await deletedcate.remove();
        if (!deletedcate) {
            return res.status(401).json({ success: false, message: 'loại thú cưng không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'xóa loại thú cưng thành công', cate: deletedcate })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})


module.exports = router