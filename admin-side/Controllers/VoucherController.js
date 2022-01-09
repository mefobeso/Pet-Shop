const cloudinary = require("../Utils/cloudinary");
const upload = require("../Utils/multer");
const Voucher = require("../Models/Voucher");
const lodash = require("lodash")

module.exports.GetVouchers =async (req, res) => {
    try {
        const vouchers = await Voucher.find()
        res.status(200).json({ success: true, vouchers: vouchers })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.GetDetailVoucher = async (req, res) => {
    try {
        const voucher = await Voucher.findById(req.params.id)
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
        
        await Voucher.create(req.body)
        res.json({ success: true, message: 'thêm voucher thành công' });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.UpdateVoucher = async (req, res) => {
    try {
        const voucher = await Voucher.findById(req.params.id);
        
        lodash.extend(voucher,req.body)           
           voucher && voucher.save();
            res.status(200).json({ success: true, message: 'Thay đổi thành công'})
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.DeleteVoucher =  async (req, res) => {
    try {
        let deletedvoucher = await Voucher.findById(req.params.id);
        await deletedvoucher.remove();
        if (!deletedvoucher) {
            return res.status(401).json({ success: false, message: 'Voucher is not available' })
        } else {
            res.json({ success: true, message: 'xóa sản phẩm thành công', voucher: deletedvoucher })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}