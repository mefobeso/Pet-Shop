const Product = require("../Models/Product");
const lodash = require("lodash");

module.exports.GetProducts = async (req, res) => {
  try {
    const Products = await Product.find();
    res.json({ success: true, Products: Products });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "lỗi server" });
  }
};
module.exports.GetDetailProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "lỗi server" });
  }
};
module.exports.AddProduct = async (req, res) => {
  const { name, cateName, price, description, img, rating,  status } =
    req.body;
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Thiếu tên sản phẩm" });
  if (!price)
    return res.status(400).json({ success: false, message: "Thiếu giá" });
  if (!img)
    return res.status(400).json({ success: false, message: "Thiếu hình ảnh" });
  if (!description)
    return res
      .status(400)
      .json({ success: false, message: "Thiếu description" });
  try {
    await Product.create(req.body);
    res.json({ success: true, message: "Add Product Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "lỗi server" });
  }
};

module.exports.UpdateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    lodash.extend(product, req.body);
    product && product.save();
    res.status(200).json({ success: true, message: "Thay đổi thành công" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "lỗi server" });
  }
};

module.exports.DeleteProduct = async (req, res) => {
  try {
    const ProductDeleteConditions = { _id: req.params.id, user: req.userId };
    const deletedProduct = await Product.findOneAndDelete(
      ProductDeleteConditions
    );
    if (!deletedProduct) {
      return res
        .status(401)
        .json({ success: false, message: "Product is not available" });
    } else {
      res.json({ success: true, message: "Delete Product Successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "lỗi server" });
  }
};
