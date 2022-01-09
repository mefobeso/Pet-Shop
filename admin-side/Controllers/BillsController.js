const Bill = require("../Models/Bill");
const lodash = require("lodash");

module.exports.GetBills = async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json({ success: true, bills: bills});
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "lỗi server" });
  }
};
module.exports.GetDetailBills = async (req, res) => {
  try {
    const bills = await Bill.findById(req.params.id);
    res.status(200).json(bills);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "lỗi server" });
  }
};
module.exports.AddBill = async (req, res) => {
  try {
    await Bill.create(req.body);
    res.status(200).json({ success: true, message: "Create Successfully" });
  } catch (err) {
    {
      console.log(err);
      res.status(500).json({ success: false, message: err });
    }
  }
};
module.exports.UpdateBill = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);

    lodash.extend(bill, req.body);
    bill && bill.save();
    res.status(200).json({ success: true, message: "Thay đổi thành công" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "lỗi server" });
  }
};
module.exports.DeleteBill = async (req, res) => {
  try {
    let deletedbill = await Bill.findById(req.params.id);
    await deletedbill.remove();
    if (!deletedbill) {
      return res
        .status(401)
        .json({ success: false, message: "Bill is not available " });
    } else {
      res.json({
        success: true,
        message: "xóa hóa đơn thành công",
        bill: deletedbill,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "lỗi server" });
  }
};
