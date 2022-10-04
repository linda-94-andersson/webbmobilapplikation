import React from "react";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import Aapp from "./components/PropsPassing/Aapp";
import PrimeNumbers from "./components/PrimeNumbers/PrimeNumbers";
import Feedback from "./components/Feedback";
import Quotes from "./components/Quotes";
import Course from "./components/Course/Course";
import A_counter from "./components/A_counter/A_counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <span style={{ margin: 30 }}>
        <Counter />
      </span>
      <span style={{ margin: 30 }}>
        <Calculator />
      </span>
      <span style={{ margin: 30 }}>
        <Aapp />
      </span>
      <span style={{ margin: 30 }}>
        <PrimeNumbers />
      </span>
      <span style={{ margin: 30 }}>
        <Feedback />
      </span>
      <span style={{ margin: 30 }}>
        <Quotes />
      </span>
      <span style={{ margin: 30 }}>
        <Course />
      </span>
      <span style={{ margin: 30 }}>
        <A_counter />
      </span>
    </div>
  );
}

export default App;
