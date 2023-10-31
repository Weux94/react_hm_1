import { useState } from "react";
import Button from "../../componets/Button/Button";
import Input from "../../componets/Input/Input";
import Logo from "../../assets/Logo/Logo";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem(`token`, `1234qwert5678`);
    } else {
      if (username !== "admin") {
        setUsernameError("Неверное имя пользователя");
      }
      if (password !== "password") {
        setPasswordError("Неверный пароль");
      }
    }
  };

  return (
    <div className="login-panel">
      <div className="login-block">
        <Logo />

        <div className="input-container">
          <Input name="username" onChange={handleNameChange} />
          <span
            className={`error-message ${usernameError ? "visible" : "hidden"}`}
          >
            {usernameError}
          </span>
        </div>

        <div className="input-container">
          <Input name="password" onChange={handlePasswordChange} />
          <FaEye className="input-icon" />
          <span
            className={`error-message ${passwordError ? "visible" : "hidden"}`}
          >
            {passwordError}
          </span>
        </div>

        <Button onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
