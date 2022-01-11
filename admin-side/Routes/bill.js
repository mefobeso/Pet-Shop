const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const bill = require("../Models/Bill");
const BillsController = require("../Controllers/BillsController");

// xem danh sách hóa đơn
router.get("/", BillsController.GetBills);
// xem chi tiết hóa đơn
router.get("/:id", BillsController.GetDetailBills);

// thêm hóa đơn
router.post("/",verifyToken, BillsController.AddBill);

//sửa hóa đơn theo id
router.put("/:id",verifyToken, BillsController.UpdateBill);


// xóa bill
router.delete("/:id",verifyToken, BillsController.DeleteBill);

module.exports = router;
