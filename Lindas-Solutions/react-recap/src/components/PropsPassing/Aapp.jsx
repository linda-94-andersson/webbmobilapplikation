import { useState } from "react";
import Bpp from "./Bpp";

function Aapp() {
  const [x, setX] = useState(0);

  return (
    <div>
      <span>{`x = ${x}`}</span>
      <Bpp x={x} setX={setX} />
    </div>
  );
}

export default Aapp;
