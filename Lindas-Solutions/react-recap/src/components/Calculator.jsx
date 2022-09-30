import { useState } from "react";

function Calculator() {
  const [add1, setAdd1] = useState(0);
  const [add2, setAdd2] = useState(0);
  const [sum, setSum] = useState("+");

  function handleAdd1() {
    setAdd1(add1 + 1);
  }

  function handleAdd2() {
    setAdd2(add2 + 1);
  }

  function handleOperator() {
    if (sum === "+") return add1 + add2;
    if (sum === "-") return add1 - add2;
    if (sum === "*") return add1 * add2;
    if (sum === "/") return add1 / add2;
  }

  return (
    <div className="App">
      <button onClick={handleAdd1}>{add1}</button>
      <select value={sum} onChange={(e) => setSum(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button onClick={handleAdd2}>{add2}</button>
      <span>=</span>
      <span>{handleOperator()}</span>
    </div>
  );
}

export default Calculator;
