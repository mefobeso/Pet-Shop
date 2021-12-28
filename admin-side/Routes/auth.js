const express = require('express');
const router = express.Router();

const verifyToken =require('../Middleware/Auth')
const AuthController = require("../Controllers/AuthController")

// Đăng ký tài khoản
router.post('/register', AuthController.Register)


// Đăng nhập
router.post('/Login', AuthController.Login)

// xem danh sách tài khoản
router.get("/Account", verifyToken,AuthController.GetAccounts)

//xem tài khoản
router.get("/Account/:id", verifyToken,AuthController.GetDetailAccount )


// cấp quyền hoạt động hoặc khóa tài khoản
router.put('/Account/:id', verifyToken, AuthController.UpdateAccount)

// xóa tài khoản
router.delete('/Account/:id', verifyToken, AuthController.DeleteAccount)

module.exports = router