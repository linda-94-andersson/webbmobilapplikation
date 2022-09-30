import React from "react";

function Cpp(props) {
  function handleX() {
    props.setX(props.x + 1);
  }

  return (
    <div>
      <button onClick={handleX}>X++</button>
      <span>{`x = ${props.x}`}</span>
    </div>
  );
}

export default Cpp;
