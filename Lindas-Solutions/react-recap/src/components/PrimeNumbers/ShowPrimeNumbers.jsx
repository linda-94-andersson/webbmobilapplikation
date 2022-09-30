import React from "react";
import { useEffect, useState } from "react";

function ShowPrimeNumbers(props) {
  const [primeNumbers, setPrimeNumbers] = useState([]);

  useEffect(() => {
    const newPrimeNumbers = [];

    for (var i = 2; i <= props.n; i++) {
      var isPrime = true;
      for (var j = 0; j < newPrimeNumbers.length && isPrime; j++) {
        if (i % newPrimeNumbers[j] === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        newPrimeNumbers.push(i);
      }
    }
    setPrimeNumbers(newPrimeNumbers);
  }, [props.n]);

  return (
    <div>
      <p>Här är alla primtal upp till {props.n}</p>
      <p>
        {primeNumbers.map((number) => (
          <span style={{ padding: "0 3px" }} key={number}>
            {number}
          </span>
        ))}
      </p>
    </div>
  );
}

export default ShowPrimeNumbers;
