import axios from "axios";
import { useState } from "react";

function LoginForm(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    let validate = true;
    if (username === "") {
      setUsernameError("Username is empty*");
      validate = false;
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("Password is empty*");
      validate = false;
    } else {
      setPasswordError("");
    }

    if (validate) {
      console.log({ username, password });

      const loginData = {
        username: username,
        password: password,
      };

      const promiseHandler = axios.post(
        "https://api.freeapi.app/api/v1/users/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      promiseHandler
        .then((response) => {
          console.log(response);
          props.setFormLogin(response.data.message);
        })
        .catch((err) => {
          console.log(err);
          props.setFormLogin(err.response?.data?.message);
        });

      setPassword("");
      setUserName("");
    }
  };
  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };

  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={HandleSubmit} className="flex flex-col w-full">
      <p className="text-center text-green-500 pb-1 text-[0.8rem]">
        {props.formLogin}
      </p>
      <input
        type="text"
        placeholder="Username"
        onChange={usernameHandler}
        value={username}
        className=" text-[0.8rem] w-full border-2 border-[var(--primary-bg-color)] py-1 pl-4 rounded-md"
      />
      <p className="text-red-600 text-xs  mb-3 m-0">{usernameError}</p>

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={PasswordHandler}
        className="border-2 text-[0.8rem] w-full border-[var(--primary-bg-color)] py-1 pl-4 rounded-md"
      />
      <p className="text-red-600 text-xs  mb-3 m-0">{passwordError}</p>
      <div className="flex gap-4 py-4 item-center  justify-center">
        <input type="checkbox" className="h-5 w-5" />
        <p className="text-[0.8rem]">Remember me</p>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-center  text-[0.6rem] w-[65px] border-2 rounded-lg border-[purple] px-3 py-1"
        >
          login
        </button>
      </div>
    </form>
  );
}
export default LoginForm;
