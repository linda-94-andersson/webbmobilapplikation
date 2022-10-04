import React from "react";
import ObjectHolder from "./ObjectHolder";

function Table() {
  const people = [
    {
      name: "Ryan",
      age: 41,
    },
    {
      name: "Bryan",
      age: 68,
    },
    //...
  ];

  return (
    <div>
      <ObjectHolder data={people} />
    </div>
  );
}

export default Table;
