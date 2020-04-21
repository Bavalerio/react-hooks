import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  useEffect(() => {
    console.log("UseEffect - updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        useEffect - Click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
