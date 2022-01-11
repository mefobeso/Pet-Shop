import axios from "axios";
const products = [];
axios
  .get("https://petshoptmdt.herokuapp.com/products")
  .then((res) => res.data.Products.map((item) => products.push(item)));

const productByCategory = (category) => {
  products.filter((p) => p.cate_id === category);
};
export { products, productByCategory };
