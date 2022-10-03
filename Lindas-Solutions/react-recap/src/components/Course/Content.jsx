import React from "react";
import Part from "./Part";

function Content({ courses }) {
  const counts = courses.map((p) =>
    p.parts.reduce((total, item) => item.exercises + total, 0)
  );

  return (
    <div>
      <span>{`Total amount of exercises: ${counts}`}</span>
      <Part courses={courses} />
    </div>
  );
}

export default Content;
