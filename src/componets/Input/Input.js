import "./Input.css";
const Input = (props) => {
  return (
    <div>
      <input type="text" className="login-input" placeholder={props.name} />
    </div>
  );
};

export default Input;
