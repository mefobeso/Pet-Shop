
import axios from "axios"
const dataProducts = [
  {
    id: 1,
    name: "Samoyed",
    price: +500.0,
    img: ["https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"],
    quantity: 999,
    rating: 4.5,
    category: "dog",
  },
  {
    id: 2,
    name: "Corgi",
    price: +500,
    quantity: 5,
    category: "dog",
    img: ["https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"],
  },
  {
    id: 3,
    name: "Golden Retriver",
    price: +14,
    quantity: 14,
    category: "dog",
    img: ["https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"],
  },
  {
    id: 4,
    name: "Collie",
    price: +30,
    quantity: 7,
    category: "dog",
    img: ["https://images.unsplash.com/photo-1606047915666-346ea321c92c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"],
  },
  {
    id: 5,
    name: "Bulldog",
    price: +55,
    quantity: 20,
    category: "dog",
    img: ["https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
  },
  {
    id: 6,
    name: "Yorki",
    price: +40,
    quantity: 21,
    category: "dog",
    img: ["https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
  },
  {
    id: 7,
    name: "Canie",
    price: +35,
    quantity: 34,
    category: "dog",
    img: ["https://images.unsplash.com/photo-1546491764-67a5b8d5b3ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
  },
  {
    id: 8,
    name: "France Bull",
    price: +100,
    quantity: 87,
    category: "dog",
    img: ["https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
  },
  {
    id: 9,
    name: "France Bull",
    price: +500,
    quantity: 87,
    category: "food",
    img: ["https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
  },
  {
    id: 10,
    name: "France Bull",
    price: +500,
    quantity: 87,
    category: "food",
    img: ["https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
  },
  {
    id: 11,
    name: "France Bull",
    price: +500,
    quantity: 87,
    category: "food",
    img: ["https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
  },
  {
    id: 12,
    name: "France Bull",
    price: +20,
    quantity: 87,
    category: "food",
    img: ["https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"],
  },
  {
    id: 13,
    name: "France Bull",
    price: +20,
    quantity: 87,
    category: "food",
    img: "https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];
const products = []
axios.get("http://localhost:5000/products")
.then(res => res.data.Products.map(item=>products.push(item)))

const productByCategory = (category) => {
  products.filter((p) => p.cate_id === category);
};
export { dataProducts ,products, productByCategory };
