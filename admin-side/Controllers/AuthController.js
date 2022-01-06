const User = require('../Models/User')
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const lodash = require('lodash')

module.exports.Login = async(req, res) => {
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
        // const passwordValid = await argon2.verify(user.password, password)
        // if(!passwordValid){
        //     return res.status(400).json({ success: false, message: 'Mật khẩu không đúng'})
        // }
        if(password === user.password){
            const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET)
            res.json({success: true, message: 'Đăng nhập thành công', accessToken,userId:user._id})
        }
        else {
            // const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET)
            // res.json({success: true, message: 'Đăng nhập thành công', accessToken})
            return res.status(400).json({ success: false, message: 'Mật khẩu không đúng'})
        }
        // oke hết  
        // trả token
    }
    catch(err){
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server'})
    }
}
module.exports.Register = async (req, res) => {
    const { username, password,email } = req.body
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
        // const hashedPassword = argon2.hash(password)
        await  User.create(req.body)
        

        // trả token
        
        res.json({success: true, message: 'Đăng ký thành công'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server'})
    }
}
module.exports.GetAccounts = async (req, res) => {
    try {
        const accounts = await User.find()
        res.json({ success: true, accounts: accounts })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.GetDetailAccount = async (req, res) => {
    try {
        const account = await User.findById(req.params.id)
        res.json({ success: true, account: account })
        if(account == null){
            return res.status(404).json({message:'Không thể tìm thấy tài khoản này'})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}
module.exports.UpdateAccount = async (req, res) => {
   
    try {
        const user = await User.findById(req.params.id)
        lodash.extend(user,req.body)           
           user && user.save();
            res.status(200).json({ success: true, message: 'Thay đổi thành công'})               
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.DeleteAccount = async (req, res) => {
    try {
        const AccountDeleteConditions = { _id: req.params.id, user: req.userId }
        const deletedAccount = await User.findOneAndDelete(AccountDeleteConditions)
        if (!deletedAccount) {
            return res.status(401).json({ success: false, message: 'Người dùng không tồn tại' })
        } else {
            res.json({ success: true, message: 'Delete Successfully' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}