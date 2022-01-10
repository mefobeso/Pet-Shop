import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import axios from "axios";

const dataSlider = [
  {
    id: uuid(),
    title: "ALL PRODUCT",
    products: [
      {
        name: "Tellme stewed duck soft food ",
        price: 25,
        img: "https://www.petcity.vn/media/product/4765_tellme____th___c___n_m___m_v___t_h___m_b____sung_rau_c____cho_ch___130g.jpg",
      },
      {
        name: "Araton lamb",
        price: 20,
        img: "https://www.petcity.vn/media/product/250_3510_1683667_l.png",
      },
      {
        name: "CTC Bio",
        price: 500,
        img: "https://www.petcity.vn/media/product/250_2373_home_dog_moisture_petcity.jpg",
      },
      {
        name: "Araton salmon adult cat food",
        price: 500,
        img: "https://www.petcity.vn/media/product/250_4889_1.png",
      },
      {
        name: "ANF ​​6 Free salmon flavored organic dog food",
        price: 500,
        img: "https://www.petcity.vn/media/product/250_4683_z2315270662193_0f380be800fb596c747fdbe50beff58a.jpg",
      },
      {
        name: "ANF ​​6 Free Duck Flavored Organic Dog Food",
        price: 500,
        img: "https://www.petcity.vn/media/product/250_4685_z2315270663803_d157e18600b0498978a3bd358dd7275a.jpg",
      },
      {
        name: "Earthborn Holistic Puppy Vantage",
        price: 500,
        img: "https://www.petcity.vn/media/product/250_4316_",
      },
      {
        name: "Farmina - N&D ANCESTRAL GRAIN Chicken",
        price: 500,
        img: "https://www.petcity.vn/media/product/250_4297_parmini.png",
      },
    ],
  },
  // TOP-RATED
  {
    id: uuid(),
    title: "TOP-RATED",
    products: [
      {
        name: "Samoyed",
        price: 500,
        img: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
      },
      {
        name: "Corgi",
        price: 500,
        img: "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      },
      {
        name: "Golden Retriver",
        price: 500,
        img: "https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Collie",
        price: 500,
        img: "https://images.unsplash.com/photo-1606047915666-346ea321c92c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Bulldog",
        price: 500,
        img: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Yorki",
        price: 500,
        img: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Canie",
        price: 500,
        img: "https://images.unsplash.com/photo-1546491764-67a5b8d5b3ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "France Bull",
        price: 500,
        img: "https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },

  // FEATURE
  {
    id: uuid(),
    title: "FEATURE",
    products: [
      {
        name: "Samoyed",
        price: 500,
        img: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
      },
      {
        name: "Corgi",
        price: 500,
        img: "https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      },
      {
        name: "Golden Retriver",
        price: 500,
        img: "https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Collie",
        price: 500,
        img: "https://images.unsplash.com/photo-1606047915666-346ea321c92c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Samoyed",
        price: 500,
        img: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
      },
      {
        name: "Corgi",
        price: 500,
        img: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
      },
      {
        name: "Golden Retriver",
        price: 500,
        img: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
      },
      {
        name: "Collie",
        price: 500,
        img: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
      },
    ],
  },
];

export default dataSlider;
