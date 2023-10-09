import "./Products.css";
import LogoWhite from "../../assets/LogoWhite/LogoWhite";
import Link from "../../componets/Links/Link";
import Title from "../../componets/Title/Title";
import { BsPerson } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";

import Table from "../../componets/Table/Table";
import Row from "../../componets/TableRows/Row";
const Products = () => {
  return (
    <div className="body-bcg">
      <LogoWhite />
      <div className="link">
    
        <Link text={"Preview"} ico={ <BsPerson /> }/>
        <Link text={"Add product"} ico={<BsPlus />} />
      </div>
      <Title />
      <table>
        <thead>
          <Table />
        </thead>
        <tbody>
          <Row />
        </tbody>
      </table>
    </div>
  );
};

export default Products;
