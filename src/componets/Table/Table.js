import "./Table.css";
import { LuArrowUpDown } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const Table = (props) => {
  return (
    <table>
      <thead>
        <tr className="first-row">
          <th>
            ID
            <span className="upDown">
              <LuArrowUpDown />
            </span>
          </th>
          <th>
            Category
            <span className="upDown">
              <LuArrowUpDown />
            </span>
          </th>
          <th>
            Name
            <span className="upDown">
              <LuArrowUpDown />
            </span>
          </th>
          <th>
            Quantity
            <span className="upDown">
              <LuArrowUpDown />
            </span>
          </th>
          <th>
            Price (₴)
            <span className="upDown">
              <LuArrowUpDown />
            </span>
          </th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {props.data.map((item) => {
          return (
            <tr key={item.id} className="myRow">
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                {
                  <span className="edit">
                    <MdOutlineEdit />
                  </span>
                }
                <span className="delete">{<MdDelete />}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
