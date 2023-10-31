import "./Button.css";
const Button = (props) => {
  return (
    <button className="login-btn" onClick={props.onClick}>
      Login
    </button>
  );
};

export default Button;
