import React from "react";

function Header({ courses }) {
  return (
    <div>
      {courses.map((n) => (
        <div key={n.id}>
          <h2>{n.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Header;
