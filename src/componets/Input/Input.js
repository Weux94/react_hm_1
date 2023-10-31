import "./Input.css";
const Input = (props) => {
  return <input type="text" className="login-input" placeholder={props.name} onChange={props.onChange}/>;
  
};

export default Input;
