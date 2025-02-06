import { useState, useEffect } from "react";

function Learn() {
  const [add, setAdd] = useState(0);
  const [add2, setAdd2] = useState(0);
  const addd = () => {
    setAdd(add + 1);
  };
  const btn2 = () => {
    setAdd2(add2 + 1);
  };
  //   when initiial page render only render when page is re-render or refresh
// case 1
  useEffect(() => {
    alert("initial render of page ");
  }, []);
  //   case2
  useEffect(() => {
    console.log("adding number");
  }, [add]);

  //   this is render everytime when function call same as case:2
  useEffect(() => {
    console.log("notadd");
  });

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Disappointed by myself</h1>
      <button onClick={addd} className=" border-red-800 px-2 py 2">
        add {add}
      </button>
      <button onClick={btn2}>button2 {add2}</button>
    </div>
  );
}
export default Learn;
