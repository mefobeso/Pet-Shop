const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const verifyToken =require('../Middleware/Auth')
const User = require('../Models/User')

// Đăng ký tài khoản
router.post('/register', async (req, res) => {
    const { username, password } = req.body
    // kiểm tra xem tên đăng nhập và password có không
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Thiếu tên đăng nhập hoặc mật khẩu' });
    }
    try{ 
        // kiểm tra xem tên tài khoản có bị trùng không
        const user = await User.findOne({ username: username})
        if(user)
        return res.status(400).json({ success: false, message: 'Tên đăng nhập đã tồn tại' });


        // chạy oke hết
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({username, password: hashedPassword})
        await newUser.save()

        // trả token
        const accessToken = jwt.sign({userId: newUser._id}, process.env.ACCESS_TOKEN_SECRET)
        res.json({success: true, message: 'Đăng ký thành công', accessToken})
    }
    catch(err){
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server'})
    }
})


// Đăng nhập
router.post('/Login', async(req, res) => {
    const { username, password } = req.body
    // kiểm tra có tên đăng nhập với mật khẩu chưa
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Thiếu tên đăng nhập hoặc mật khẩu' });
    }
    try{
        // kiểm tra xem tên tài khoản có tồn tại không
        const user = await User.findOne({ username: username})
        if(!user)
        return res.status(400).json({ success: false, message: 'Tên đăng nhập không tồn tại' });
        // tìm thấy tên đăng nhập
        const passwordValid = await argon2.verify(user.password, password)
        if(!passwordValid){
            return res.status(400).json({ success: false, message: 'Mật khẩu không đúng'})
        }
        // oke hết  
        // trả token
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET)
        res.json({success: true, message: 'Đăng nhập thành công', accessToken})
    }
    catch(err){
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server'})
    }
})

// xem danh sách tài khoản
router.get("/Account", verifyToken, async (req, res) => {
    try {
        const accounts = await User.find()
        res.json({ success: true, accounts: accounts })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

//xem tài khoản
router.get("/Account/:id", verifyToken, async (req, res) => {
    try {
        const account = await User.findById(req.params.id)
        res.json({ success: true, account: account })
        if(account == null){
            return res.status(404).json({message:'Không thể tìm thấy tài khoản này'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


// cấp quyền hoạt động hoặc khóa tài khoản
router.put('/Account/:id', verifyToken, async (req, res) => {
    const { status } = req.body
    try {
        let EditAccount = {
            status: status || 'Hoạt động'
        }
        const AccountEdit = {
            _id: req.params.id, user: req.userId
        }
        updatedAccount = await User.findOneAndUpdate(AccountEdit, EditAccount, { new: true })
        // người dùng không được phép cập nhật bài đăng
        if (!updatedAccount) {
            return res.status(401).json({ success: false, message: 'Tài khoản không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'Thay đổi thành công', post: updatedAccount })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

// xóa tài khoản
router.delete('/Account/:id', verifyToken, async (req, res) => {
    try {
        const AccountDeleteConditions = { _id: req.params.id, user: req.userId }
        const deletedAccount = await User.findOneAndDelete(AccountDeleteConditions)
        if (!deletedAccount) {
            return res.status(401).json({ success: false, message: 'Bài đăng không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'Oke', post: deletedAccount })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

module.exports = router