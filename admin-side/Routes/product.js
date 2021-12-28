const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const ProductController = require("../Controllers/ProductsController")

const Product = require("../Models/Product");

// xem danh sách bài viết
router.get("/",  ProductController.GetProducts)

// thêm sản phẩm
router.Product('/', verifyToken, ProductController.AddProduct);

//sửa sản phẩm theo id
router.put('/:id', verifyToken, ProductController.UpdateProduct)

// xóa Product
router.delete('/:id', verifyToken, ProductController.DeleteProduct)


module.exports = router