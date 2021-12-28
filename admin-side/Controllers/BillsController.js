const bill = require("../Models/Bill");


module.exports.GetBills = async (req, res) => {
    try {
        const bills = await bill.find()
        res.json({ success: true, bills: bills })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.AddBill = async (req, res) => {
    console.log(req.body);
    let bill = await  bill.push(req.body)
    res.json({ success: true, bill: bill})
}
module.exports.UpdateBill = async (req, res) => {
    try {
        let bill = await bill.findById(req.params.id);
        const data = {
            billName: req.body.billName || bill.billName,
        }
        updatedbill = await bill.findByIdAndUpdate(req.params.id, data, { new: true })
        // người dùng không được phép cập nhật sản phẩm
        if (!updatedbill) {
            return res.status(401).json({ success: false, message: 'hóa đơn không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'sửa loại hóa đơn thành công', bill: updatedbill })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.DeleBill = async (req, res) => {
    try {
        let deletedbill = await bill.findById(req.params.id);
        await deletedbill.remove();
        if (!deletedbill) {
            return res.status(401).json({ success: false, message: 'hóa đơn không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'xóa hóa đơn thành công', bill: deletedbill })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}