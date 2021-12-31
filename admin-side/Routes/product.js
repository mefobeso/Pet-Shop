const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/Auth");
const ProductController = require("../Controllers/ProductsController")

const Product = require("../Models/Product");

// xem danh sách sản phẩm
router.get("/",  ProductController.GetProducts)

// Xem Chi tiết sản phẩm
router.get("/:id", ProductController.GetDetailProduct)

// thêm sản phẩm
router.post('/',  ProductController.AddProduct);

//sửa sản phẩm theo id
router.put('/:id',  ProductController.UpdateProduct)

// xóa Product
router.delete('/:id',  ProductController.DeleteProduct)


module.exports = router