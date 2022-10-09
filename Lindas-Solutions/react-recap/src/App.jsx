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
import Table from "./components/Table/Table";
import Beer from "./components/Beer_table/Beer";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import InputValidation from "./components/InputValidation";

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
      <span style={{ margin: 30 }}>
        <Table />
      </span>
      <span style={{ margin: 30 }}>
        <Beer />
      </span>
      <span style={{ margin: 30 }}>
        <InputValidation />
      </span>
      <span style={{ margin: 30 }}>
        <PhoneBook />
      </span>
    </div>
  );
}

export default App;
