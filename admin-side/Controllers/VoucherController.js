const cloudinary = require("../Utils/Cloudinary");
const upload = require("../Utils/multer");
const voucher = require("../Models/Voucher");

module.exports.GetVouchers =async (req, res) => {
    try {
        const vouchers = await voucher.find()
        res.json({ success: true, vouchers: vouchers })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.GetDetailVoucher = async (req, res) => {
    try {
        const voucher = await voucher.findById(req.params.id)
        res.json({ success: true, voucher: voucher })
        if(voucher == null){
            return res.status(404).json({message:'Không thể tìm thấy thú cưng này'})
        }
    } catch (err) {
        res.status(500).json({success: false, message: 'lỗi server' })
    }
}
module.exports.AddVoucher= async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        let newvoucher = new voucher({
            VoucherName: req.body.VoucherName,
            description: req.body.description,
            img: result.secure_url,
            cloudinary_id: result.public_id,
            Value: req.body.Value,
            OutDate: req.body.OutDate,
        });
        await newvoucher.save()
        res.json({ success: true, message: 'thêm sản phẩm thành công', voucher: newvoucher });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.UpdateVoucher = async (req, res) => {
    try {
        let voucher = await voucher.findById(req.params.id);
        await cloudinary.uploader.destroy(voucher.cloudinary_id);
        const result = await cloudinary.uploader.upload(req.file.path);
        const data = {
            VoucherName: req.body.VoucherName || voucher.VoucherName,
            description: req.body.description || voucher.description,
            img: result.secure_url || voucher.img,
            cloudinary_id: result.public_id || voucher.cloudinary_id,
            Value: req.body.Value || voucher.Value,
            OutDate: req.body.OutDate || voucher.OutDate,
        }
        updatedvoucher = await voucher.findByIdAndUpdate(req.params.id, data,{new : true})
        // người dùng không được phép cập nhật sản phẩm
        if (!updatedvoucher) {
            return res.status(401).json({ success: false, message: 'sản phẩm không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'sửa thông tin sản phẩm thành công', voucher: updatedvoucher })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.DeleteVoucher =  async (req, res) => {
    try {
        let deletedvoucher = await voucher.findById(req.params.id);
        await cloudinary.uploader.destroy(deletedvoucher.cloudinary_id);
        await deletedvoucher.remove();
        if (!deletedvoucher) {
            return res.status(401).json({ success: false, message: 'sản phẩm không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'xóa sản phẩm thành công', voucher: deletedvoucher })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}