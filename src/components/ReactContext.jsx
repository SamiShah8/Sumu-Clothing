import { useState } from "react";

export default function GrandParent() {
  return (
    <div>
      <Parent />
    </div>
  );
}

function Parent() {
  return (
    <div>
      <Child />
    </div>
  );
}

function Child() {
  const [familyTree, setFamilyTree] = useState({
    name: "grandfather",
    child: {
      name: "parent",
      child: {
        name: "child",
      },
    },
  });
  return <h2>child</h2>;
}
