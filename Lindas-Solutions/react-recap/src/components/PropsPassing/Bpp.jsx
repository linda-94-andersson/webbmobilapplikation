import React from "react";
import Cpp from "./Cpp";

function Bpp(props) {
  return <div>
    <span>{`x = ${props.x}`}</span>
      <Cpp x={props.x} setX={props.setX}/>
  </div>;
}

export default Bpp;
