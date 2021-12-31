const CateModel = require("../Models/Cate");
const express = require("express");
module.exports.GetCates =  async (req, res) => {
    try {
        const cates = await CateModel.find()
        res.json({ success: true, cates: cates })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.AddCate = async (req, res) => {
    try {
        let newcate = new CateModel({
            cateName: req.body.cateName,
        });
        await newcate.save()
        res.json({ success: true, message: 'thêm loại thú cưng thành công', cate: newcate });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.UpdateCate = async (req, res) => {
    try {
        let cate = await CateModel.findById(req.params.id);
        const data = {
            cateName: req.body.cateName || cate.cateName,
        }
        updatedcate = await CateModel.findByIdAndUpdate(req.params.id, data,{new : true})
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
}
module.exports.DeleteCate = async (req, res) => {
    try {
        let deletedcate = await CateModel.findById(req.params.id);
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
}