import { useState } from "react";
function ExtractInput() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [greeting, setGreeting] = useState("");
  const [greetErr, setGreetErr] = useState("");

  const NameField = (event) => {
    setName(event.target.value);
  };
  const greetingField = (e) => {
    setGreeting(e.target.value);
  };

  const Submitbtn = (e) => {
    e.preventDefault();

    let verified = true;

    if (name === "") {
      verified = false;
      setNameErr("name is required");
    } else {
      setNameErr("");
    }

    if (greeting === "") {
      verified = false;
      setGreetErr("Greetings is required");
    } else {
      setGreetErr("");
    }

    if (verified) {
      alert(`${greeting} ${name}`);
      setName("");
      setGreeting("");
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form className="flex flex-col gap-2  h-[300px] w-[400px] justify-center border-2 rounded-sm p-3 border-red-500 ">
        <label>Greetings</label>
        <input
          className="py-1 px-1  "
          type="text"
          onChange={greetingField}
          value={greeting}
          placeholder="Greetings"
        />
        <p className="text-red-600 ">{greetErr}</p>
        <label>Name:</label>
        <input
          className="py-1 px-1 "
          type="text"
          onChange={NameField}
          value={name}
          placeholder="Enter your Name"
        />
        <p className="text-red-600">{nameErr}</p>
        <div className="flex justify-center">
          <button
            className="border-2 rounded-sm  border-black py-1 px-2"
            onClick={Submitbtn}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default ExtractInput;
