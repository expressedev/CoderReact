import cardImg from "../assets/img/alimendra.png";

const productos = [
  {
    id: "1",
    img: cardImg,
    name: "Alfajores Alimendra",
    stock: 40,
    category: "Alfajores",
    price: "1000",
    description: "Alfajores",
  },
  {
    id: "2",
    img: cardImg,
    name: "Alfajores Sin Azucar",
    stock: 30,
    category: "Alfajores",
    price: "2000",
    description: "Alfajores sin azucar",
  },
  {
    id: "3",
    img: cardImg,
    name: "Alfajores Veganos",
    category: "Alfajores",
    stock: 18,
    price: "1500",
    description: "Alfajores Veganos",
  },
  {
    id: "4",
    img: cardImg,
    name: "Castañas",
    stock: 23,
    category: "Frutos Secos",
    price: "19500",
    description: "Castañas de Caju tostadas y saladas",
  },
  {
    id: "5",
    img: cardImg,
    name: "Almendras",
    stock: 12,
    category: "Frutos Secos",
    price: "25000",
    description: "Almendras tostadas y saladas",
  },
  {
    id: "6",
    img: cardImg,
    name: "Nueces",
    stock: 20,
    category: "Frutos Secos",
    price: "40000",
    description: "Nueces Mariposa Saladas",
  },
];

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});
