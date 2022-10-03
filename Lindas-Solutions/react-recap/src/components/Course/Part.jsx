import React from "react";

function Part({ courses }) {
  return (
    <div>
      {courses.map((p) => (
        <div key={p.id}>
          {p.parts.map((item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <h5>{`${item.exercises} exercises`}</h5>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Part;
