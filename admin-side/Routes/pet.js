const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const cloudinary = require("../Utils/Cloudinary");
const upload = require("../Utils/multer");
const pet = require("../Models/pet");

// xem danh sách thú cưng
router.get("/", verifyToken, async (req, res) => {
    try {
        const pets = await pet.find()
        res.json({ success: true, pets: pets })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

//xem thú cưng
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const pet = await pet.findById(req.params.id)
        res.json({ success: true, pet: pet })
        if(pet == null){
            return res.status(404).json({message:'Không thể tìm thấy thú cưng này'})
        }
    } catch (err) {
        res.status(500).json({success: false, message: 'lỗi server' })
    }
})

// thêm thú cưng
router.post('/', verifyToken, upload.single("image"), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        let newpet = new pet({
            namepet: req.body.namepet,
            cateName: req.body.cateName,
            price: req.body.price,
            description: req.body.description,
            img: result.secure_url,
            cloudinary_id: result.public_id,
            rating: req.body.rating,
            amount: req.body.amount,
            status: req.body.status
        });
        await newpet.save()
        res.json({ success: true, message: 'thêm thú cưng thành công', pet: newpet });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
});

//sửa sản phẩm theo id
router.put('/:id', verifyToken, upload.single("image"), async (req, res) => {
    try {
        let pet = await pet.findById(req.params.id);
        await cloudinary.uploader.destroy(pet.cloudinary_id);
        const result = await cloudinary.uploader.upload(req.file.path);
        const data = {
            namepet: req.body.namepet || pet.namepet,
            cateName: req.body.cateName || pet.cateName,
            price: req.body.price || pet.price,
            description: req.body.description || pet.description,
            img: result.secure_url || pet.img,
            cloudinary_id: result.public_id || pet.cloudinary_id,
            rating: req.body.rating || pet.rating,
            amount: req.body.amount || pet.amount,
            status: req.body.status || pet.status
        }
        updatedpet = await pet.findByIdAndUpdate(req.params.id, data,{new : true})
        // người dùng không được phép cập nhật sản phẩm
        if (!updatedpet) {
            return res.status(401).json({ success: false, message: 'thú cưng không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'sửa thú cưng thành công', pet: updatedpet })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

// xóa pet
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        let deletedpet = await pet.findById(req.params.id);
        await cloudinary.uploader.destroy(deletedpet.cloudinary_id);
        await deletedpet.remove();
        if (!deletedpet) {
            return res.status(401).json({ success: false, message: 'thú cưng không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'xóa thú cưng thành công', pet: deletedpet })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})


module.exports = router