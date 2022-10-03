import React from "react";
import Header from "./Header";
import Content from "./Content";

function Course() {
  const courses = [
    {
      id: 1,
      name: "Deno Web3 super developer course",
      parts: [
        {
          name: "Fundamentals of Deno",
          exercises: 13,
          id: 1,
        },
        {
          name: "Why you need Web3",
          exercises: 4,
          id: 2,
        },
        {
          name: "Props is good fun!",
          exercises: 10,
          id: 3,
        },
        {
          name: "Complex state is complex",
          exercises: 7,
          id: 4,
        },
      ],
    },
    {
      id: 2,
      name: "Hologram app developer",
      parts: [
        {
          name: "Fundamentals of Holograms",
          exercises: 5,
          id: 1,
        },
        {
          name: "Essential physics",
          exercises: 7,
          id: 2,
        },
        {
          name: "3d modeling",
          exercises: 8,
          id: 3,
        },
        {
          name: "Why this is a bad idea",
          exercises: 12,
          id: 4,
        },
      ],
    },
  ];

  return (
    <div>
      <Header courses={courses} />
      <Content courses={courses} />
    </div>
  );
}

export default Course;
