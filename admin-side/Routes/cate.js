const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const cloudinary = require("../Utils/cloudinary");
const upload = require("../Utils/multer");

const CatesController = require("../Controllers/CatesController")

// xem danh sách loại thú cưng
router.get("/", CatesController.GetCates)

// thêm loại thú cưng
router.post('/', CatesController.AddCate);

//sửa sản phẩm theo id
router.put('/:id',  CatesController.UpdateCate)

// xóa cate
router.delete('/:id', verifyToken, CatesController.DeleteCate)


module.exports = router