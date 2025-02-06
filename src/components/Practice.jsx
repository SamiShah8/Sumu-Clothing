import { useState } from "react";

function Practice() {
  const [loginInput, setLoginInput] = useState({
    name: "",
    password: "",
  });
  console.log(loginInput);

  const [Err, setErr] = useState({
    nameErr: "",
    passwordErr: "",
  });

  console.log("err ", Err);
  // const [passwordErr, setPasswordErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let validate = true;
    if (loginInput.name === "") {
      setErr((prev) => {
        return {
          ...prev,
          nameErr: "name is required",
        };
      });
      validate = false;
    } else {
      setErr("");
    }

    if (loginInput.password === "") {
      setErr((prev) => {
        return {
          ...prev,
          passwordErr: "password is required",
        };
      });
      validate = false;
    } else {
      setErr("");
    }

    if (validate) {
      alert(
        `the name is ${loginInput.name} and password is ${loginInput.password}`
      );
      setLoginInput({
        name: "",
        password: "",
      });
    }
  };

  const loginInputChangeHandler = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className=" flex flex-col gap-2 w-[300px]">
        <label>Name:</label>
        <input
          className="py-2"
          onChange={loginInputChangeHandler}
          value={loginInput.name}
          type="text"
          name="name"
          autoComplete="off"
          placeholder="enter your name"
        />
        <p>{Err.nameErr}</p>
        <label>Password:</label>
        <input
          className="py-2"
          onChange={loginInputChangeHandler}
          value={loginInput.password}
          type="password"
          name="password"
          placeholder="Password"
        />
        <p>{Err.passwordErr}</p>
        <div className=" flex justify-center">
          <button
            className="border-2 py-1 px-1 border-black"
            onClick={handleSubmit}
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Practice;
