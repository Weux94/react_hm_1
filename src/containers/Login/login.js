import Button from "../../componets/Button/Button";
import Input from "../../componets/Input/Input";
import Logo from "../../componets/logo/Logo";
import "./login.css";
const Login = () => {
  return (
    <div className="login-block">
      <Logo />
      <Input name="User name" />
      <Input name="Password" />
      <Button />
    </div>
  );
};

export default Login;
