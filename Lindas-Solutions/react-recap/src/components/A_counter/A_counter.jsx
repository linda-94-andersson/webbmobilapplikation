import React, { useState } from "react";
import Counter from "./Counter";

function A_counter() {
  //Sort of works

  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);

  const increase = () => {
    setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    setStart(true);
  };

  const reset = () => {
    clearInterval(setCounter(0));
  };

  const handleCheck = () => {
    if (start === false) {
      increase();
    }
    reset();
  };

  return (
    <div>
      <span>
        {start === true ? <Counter counter={counter} /> : <span></span>}
      </span>
      <input
        type="checkbox"
        value={start}
        checked={counter === 0 ? start === true : start === false}
        onChange={handleCheck}
      />
      <label> Check me to start and stop</label>
    </div>
  );
}

export default A_counter;
