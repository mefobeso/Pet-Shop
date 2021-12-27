const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const cart = require("../Models/Cart");

// xem danh sách thú cưng
router.get("/", verifyToken, async (req, res) => {
    try {
        const carts = await cart.find()
        res.json({ success: true, carts:carts })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

//xem thú cưng
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const carts = await cart.findById(req.params.id)
        res.json({ success: true, carts: carts })
        if (carts == null) {
            return res.status(404).json({ message: 'Không thể tìm thấy đơn hàng này' })
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})

// thêm giỏ hàng
router.post('/', verifyToken, async (req, res) => {
    if (
        typeof req.body.user === "undefined" ||
        typeof req.body.products === "undefined"
      ) {
        res.status(422).json({ msg: "invalid data" });
        return;
      }
    const { user, details } = req.body;
    var cartFind;
    try {
        cartFind = await cart.findOne({ user: id_user });
    } catch (err) {
        const cart_new = new cart({
            user: user,
            details: details
        });
        let cartsave;
        try {
            cartsave = await cart_new.save();
        } catch (err) {
            res.status(500).json({ msg: err });
            return;
        }
        return;
    }
    if (cartFind === null) {
        const cart_new = new cart({
            user: user,
            details: details
        });
        let cartsave;
        try {
            cartsave = await cart_new.save();
        } catch (err) {
            res.status(500).json({ msg: err });
            return;
        }
        return;
    }
    for (let i = 0; i < details.length; i++) {
        let index = cartFind.details.findIndex(
            element => details[i]._id === element._id
        );
        if (index === -1) {
            cartFind.details.push(details[i]);
        } else {
            cartFind.details[index].amount += Number(details[i].amount);
        }
    }

    try {
        await cart.findByIdAndUpdate(cartFind._id, {
            $set: { details: cartFind.details }
        });
    } catch (err) {
        res.status(500).json({ msg: err });
        return;
    }
    res.status(200).json({ msg: "success" });
});



// xóa cart
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        let deletedcart = await cart.findById(req.params.id);
        await deletedcart.remove();
        if (!deletedcart) {
            return res.status(401).json({ success: false, message: 'đơn hàng không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'xóa đơn hàng thành công', cart: deletedcart })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
})


module.exports = router