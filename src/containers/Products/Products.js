import "./Products.css";
import LogoWhite from "../../assets/LogoWhite/LogoWhite";
import Link from "../../componets/Links/Link";
import Title from "../../componets/Title/Title";
import { BsPerson } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";


import Table from "../../componets/Table/Table";

const productsData = [
  {
    id: 1,
    category: "PC",
    name: "Asus",
    quantity: 5,
    price: 25000,
    nothing: " 1",
  },
  {
    id: 2,
    category: "Tablet",
    name: "Apple",
    quantity: 12,
    price: 22000,
    nothing: "Something 1",
  },
  {
    id: 3,
    category: "TV",
    name: "Samsung",
    quantity: 4,
    price: 18000,
    nothing: "Something 1",
  },
];



const Products = () => {
  return (
    <div className="body-bcg">
      <LogoWhite />
      <div className="link">
        <Link text={"Preview"} ico={<BsPerson />} />
        <Link text={"Add product"} ico={<BsPlus />} />
      </div>
      <Title  />
      <Table data={productsData} />
     
      
     
    </div>
  );
};

export default Products;
