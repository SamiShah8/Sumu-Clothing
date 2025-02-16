import axios from "axios";
import { useState } from "react";

function SignupForm() {
  const [signupName, setsignupName] = useState("");
  const [email, setEmail] = useState("");
  const [signupPassword, setsignupPassword] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [signupForm, setSignupForm] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const SignupSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (signupName === "") {
      valid = false;
      setNameErr("Username is empty*");
    } else {
      setNameErr("");
    }

    if (email === "") {
      valid = false;
      setemailErr("Email is empty*");
    } else {
      setemailErr("");
    }

    if (signupPassword === "") {
      valid = false;
      setPasswordErr("Password is empty*");
    } else {
      setPasswordErr("");
    }

    if (valid) {
      const names = {
        username: username,
        email: email,
        password: password,
      };
      const promiseHandler = axios.post(
        "https://api.freeapi.app/api/v1/users/register",
        names,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      promiseHandler
        .then((response) => {
          setSignupForm(response);
        })
        .catch((err) => {
          setSignupForm(err);
        });

      setsignupName("");
      setsignupPassword("");
      setEmail("");
    }
  };

  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const backUsernameHandler = (e) => {
    setsignupName(e.target.value);
  };

  const backpasswordHandeler = (e) => {
    setsignupPassword(e.target.value);
  };
  return (
    <form onSubmit={SignupSubmit} className="flex flex-col w-[90%]">
      <input
        type="text"
        placeholder="Username"
        onChange={backUsernameHandler}
        value={signupName}
        className=" w-full border-2  text-[0.8rem] py-1 border-[var(--primary-bg-color)] pl-4 rounded-md"
      />
      <p className="text-red-600 text-[0.6rem]  mb-2 m-0">{nameErr}</p>

      <input
        type="text"
        value={email}
        onChange={EmailHandler}
        placeholder="Email"
        className="border-2 w-full border-[var(--primary-bg-color)] py-1 pl-4 text-[0.8rem]  rounded-md"
      />
      <p className="text-red-600 text-[0.6rem]  mb-2 m-0">{emailErr}</p>
      <input
        type="text"
        placeholder="password"
        value={signupPassword}
        onChange={backpasswordHandeler}
        className="border-2 w-full border-[var(--primary-bg-color)] py-1 pl-4 text-[0.8rem] rounded-md"
      />
      <p className="text-red-600 text-[0.6rem]  mb-2 m-0">{passwordErr}</p>
      <div className="flex gap-4 py-4 justify-center items-center ">
        <input type="checkbox" className="h-5 w-5" />
        <p className="text-[0.8rem]">Remember me</p>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-center text-[0.6rem] border-2 rounded-lg border-[purple] px-3 py-1"
        >
          Signup
        </button>
      </div>
    </form>
  );
}
export default SignupForm;
