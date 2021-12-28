const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const cloudinary = require("../Utils/Cloudinary");
const upload = require("../Utils/multer");
const VoucherController = require("../Controllers/VoucherController")

// xem danh sách voucher
router.get("/", verifyToken, VoucherController.GetVouchers )

//xem voucher
router.get("/:id", verifyToken,VoucherController.GetDetailVoucher )

// thêm voucher
router.post('/', verifyToken, upload.single("image"), VoucherController.AddVoucher);

//sửa voucher theo id
router.put('/:id', verifyToken, upload.single("image"),VoucherController.UpdateVoucher )

// xóa voucher
router.delete('/:id', verifyToken, VoucherController.DeleteVoucher )


module.exports = router