import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleLikes() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={handleLikes}>{`${count} likes`}</button>
    </div>
  );
}

export default Counter;
