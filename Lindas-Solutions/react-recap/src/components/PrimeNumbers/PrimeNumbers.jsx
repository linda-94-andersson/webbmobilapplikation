import { useState } from "react";
import LimitInput from "./LimitInput";
import ShowPrimeNumbers from "./ShowPrimeNumbers";

function PrimeNumbers() {
  const [n, setN] = useState(0);

  return (
    <div className="App">
      <span>App</span>
      <LimitInput n={n} setN={setN} />
      <ShowPrimeNumbers n={n} setN={setN} />
    </div>
  );
}

export default PrimeNumbers;
