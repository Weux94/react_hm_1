import Button from "../../componets/Button/Button";
import Input from "../../componets/Input/Input";
import Logo from "../../assets/Logo/Logo";


import "./Login.css";

const Login = () => {
  return (
    <div className="login-panel">
      <div className="login-block ">
        <Logo />
        <Input name="User name" />
        <Input name="Password" />
        <Button />
       
      </div>
    </div>
  );
};

export default Login;
