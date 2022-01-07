const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const cloudinary = require("../Utils/cloudinary");
const upload = require("../Utils/multer");
const VoucherController = require("../Controllers/VoucherController")

// xem danh sách voucher
router.get("/",  VoucherController.GetVouchers )

//xem voucher
router.get("/:id", VoucherController.GetDetailVoucher )

// thêm voucher
router.post('/', VoucherController.AddVoucher);

//sửa voucher theo id
router.put('/:id', VoucherController.UpdateVoucher )

// xóa voucher
router.delete('/:id', VoucherController.DeleteVoucher )


module.exports = router