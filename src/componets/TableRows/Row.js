import CreateData from "../ProductsData/ProductsData";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import './Row.css';
const Row = () => {
  const data = CreateData();

  return data.map((item) => {
    return (
      <tr key={item.id} className='myRow'>
        <td >{item.id}</td>
        <td >{item.category}</td>
        <td >{item.name}</td>
        <td >{item.quantity}</td>
        <td >{item.price}</td>
        <td >{<span className="edit"><MdOutlineEdit/></span>}<span className="delete">{<MdDelete/>}</span></td>
      </tr>
    );
  });
};

export default Row;

