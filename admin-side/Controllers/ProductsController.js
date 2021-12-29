const Product = require("../Models/Product");

module.exports.GetProducts = async (req, res) => {
    try {
        const Products = await Product.find()
        res.json({ success: true, Products: Products })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.GetDetailProduct = async (req, res) =>{
    try{
        const {product_id} = req.params
        const product = await Product.findById(product_id)
        res.status(200).json(product)
    }
    catch (err){
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}
module.exports.AddProduct = async (req, res) => {
    const { nameProduct, cateName, price, description, img, rating, amount, status } = req.body;
    if (!nameProduct)
        return res.status(400).json({ success: false, message: "Thiếu tên sản phẩm" });
    if (!cateName)
        return res.status(400).json({ success: false, message: "Thiếu tên thể loại sản phẩm" });
    if (!price)
        return res.status(400).json({ success: false, message: "Thiếu giá" });
    if (!img)
        return res.status(400).json({ success: false, message: "Thiếu hình ảnh" });
    if (!description)
        return res.status(400).json({ success: false, message: "Thiếu description" });
    if (!amount)
        return res.status(400).json({ success: false, message: "Thiếu số lượng" });
    try {
        const newProduct = new Product({
            nameProduct, cateName, price, description, img, rating, amount, status
        });
        await newProduct.save()
        res.json({ success: true, message: 'thêm sản phẩm thành công', Product: newProduct });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}

module.exports.UpdateProduct =  async (req, res) => {
    const { nameProduct, cateName, price, description, img, rating, amount, status } = req.body
    if (!nameProduct)
        return res.status(400).json({ success: false, message: "Thiếu tên sản phẩm" });
    if (!cateName)
        return res.status(400).json({ success: false, message: "Thiếu tên thể loại sản phẩm" });
    if (!price)
        return res.status(400).json({ success: false, message: "Thiếu giá" });
    if (!img)
        return res.status(400).json({ success: false, message: "Thiếu hình ảnh" });
    if (!description)
        return res.status(400).json({ success: false, message: "Thiếu description" });
    if (!amount)
        return res.status(400).json({ success: false, message: "Thiếu số lượng" });
    try {
        let updatedProduct = {
            nameProduct,
            cateName,
            price,
            description: description || '',
            img,
            rating,
            amount,
            status: status
        }
        const ProductUpdateCondition = {
            _id: req.params.id, user: req.userId
        }
        updatedProduct = await Product.findOneAndUpdate(ProductUpdateCondition, updatedProduct, { new: true })
        // người dùng không được phép cập nhật sản phẩm
        if (!updatedProduct) {
            return res.status(401).json({ success: false, message: 'sản phẩm không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'sửa thông tin sản phẩm thành công', Product: updatedProduct })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}

module.exports.DeleteProduct = async (req, res) => {
    try {
        const ProductDeleteConditions = { _id: req.params.id, user: req.userId }
        const deletedProduct = await Product.findOneAndDelete(ProductDeleteConditions)
        if (!deletedProduct) {
            return res.status(401).json({ success: false, message: 'sản phẩm không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'xóa sản phẩm thành công', Product: deletedProduct })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'lỗi server' })
    }
}