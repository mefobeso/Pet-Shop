const express = require('express');
const router = express.Router();

const verifyToken =require('../Middleware/Auth')
const AuthController = require("../Controllers/AuthController")

// Đăng ký tài khoản
router.post('/register', AuthController.Register)


// Đăng nhập
router.post('/login', AuthController.Login)

// xem danh sách tài khoản
router.get("/",AuthController.GetAccounts)

//xem tài khoản
router.get("/:id", AuthController.GetDetailAccount )


// cấp quyền hoạt động hoặc khóa tài khoản
router.put('/:id', AuthController.UpdateAccount)

// xóa tài khoản
router.delete('/:id',  AuthController.DeleteAccount)

module.exports = router