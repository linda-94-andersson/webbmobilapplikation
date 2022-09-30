import React from "react";

function LimitInput(props) {
  return (
    <div>
      <span>gräns =</span>
      <input onChange={(e) => props.setN(e.target.value)} />
    </div>
  );
}

export default LimitInput;
