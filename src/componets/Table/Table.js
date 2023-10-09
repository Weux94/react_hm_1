
import "./Table.css";
import { LuArrowUpDown } from "react-icons/lu";
const Table = () => {
  return (
      <tr className="myTable">
        <th>ID<span className="ico"> <LuArrowUpDown /></span> </th>
        <th>Category<span className="ico"><LuArrowUpDown /></span> </th>
        <th>Name<span className="ico"><LuArrowUpDown /></span> </th>
        <th>Quantity<span className="ico"><LuArrowUpDown /></span> </th>
        <th>Price (₴) <span className="ico"><LuArrowUpDown /></span></th>
        <th>Nothing<span className="ico"><LuArrowUpDown /></span> </th>
      </tr>
  );
};

export default Table;

