const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const bill = require("../Models/Bill");
const cart = require("../Models/Cart");
const BillsController = require("../Controllers/BillsController")

// xem danh sách hóa đơn
router.get("/", verifyToken,BillsController.GetBills )  

// thêm hóa đơn
router.post('/', verifyToken, BillsController.AddBill)

//sửa hóa đơn theo id
router.put('/:id', verifyToken, BillsController.UpdateBill)

// xóa bill
router.delete('/:id', verifyToken, BillsController.DeleBill )


module.exports = router