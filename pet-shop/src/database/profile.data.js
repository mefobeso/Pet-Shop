import { v4 as uuid } from "uuid";

const dataInfo = [
  {
    id: uuid(),
    address: "100 Le Quang Dinh",
    phone: "0998765432",
    email: "abc@gmail.com",
  },
  {
    id: uuid(),
    address: "100 Le Quang Dinh",
    phone: "0998765432",
    email: "abc@gmail.com",
  },
  {
    id: uuid(),
    address: "100 Le Quang Dinh",
    phone: "0998765432",
    email: "abc@gmail.com",
  },
];
const dataOrder = [
  {
    id: uuid(),
    products: [
      {
        id: 1,
        name: "Alaska",
        img: "https://zoipet.com/wp-content/uploads/2020/04/cho-alaska.jpg",
        price: 300,
        quantity: 2,
      },
      {
        id: 2,
        img: "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/03/d2ea8e0b-cho-husky-sibir.jpg",
        name: "Husky",
        price: 500,
        quantity: 1,
      },
      {
        id: 3,
        img: "https://www.2thucung.com/wp-content/uploads/2021/01/cho-golden.jpg",
        name: "Golden Retriever",
        price: 700,
        quantity: 1,
      },
    ],
    status: "Wait for confirm",
    totalPrice: 1800,
    payment_method: "Momo",
    delivery_method: "Ninja Van",
    account_id: 1,
    date: new Date(2021, 8, 12),
    rating: 0,
  },
  {
    id: uuid(),
    products: [
      {
        id: 4,
        img: "",
        price: 300,
        quantity: 2,
      },
      {
        id: 5,
        img: "",
        price: 500,
        quantity: 1,
      },
      {
        id: 6,
        img: "",
        price: 700,
        quantity: 1,
      },
    ],
    status: "Wait for confirm",
    totalPrice: 1800,
    delivery_method: "Ninja Van",
    payment_method: "Momo",
    account_id: 1,
    date: new Date(2021, 10, 2),
    rating: 0,
  },
  {
    id: uuid(),
    products: [
      {
        id: 7,
        img: "",
        price: 300,
        quantity: 2,
      },
      {
        id: 8,
        img: "",
        price: 500,
        quantity: 1,
      },
      {
        id: 9,
        img: "",
        price: 700,
        quantity: 1,
      },
    ],
    status: "Cancled",
    totalPrice: 1800,
    delivery_method: "Ninja Van",
    payment_method: "Momo",
    account_id: 1,
    date: new Date(2021, 1, 3),
    rating: 0,
  },
  {
    id: uuid(),
    products: [
      {
        id: 10,
        img: "",
        price: 300,
        quantity: 2,
      },
      {
        id: 11,
        img: "",
        price: 500,
        quantity: 1,
      },
      {
        id: 12,
        img: "",
        price: 700,
        quantity: 1,
      },
    ],
    status: "Confirmed",
    totalPrice: 1800,
    account_id: 1,
    delivery_method: "Ninja Van",
    payment_method: "Momo",
    date: new Date(2020, 1, 2),
    rating: 0,
  },
];
export { dataInfo, dataOrder };
