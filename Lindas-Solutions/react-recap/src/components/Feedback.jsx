import { useState } from "react";

function Feedback() {
  const [bra, setBra] = useState(0);
  const [countBra, setCountBra] = useState(0);
  const [ok, setOk] = useState(0);
  const [countOk, setCountOk] = useState(0);
  const [bad, setBad] = useState(0);
  const [countBad, setCountBad] = useState(0);

  function total() {
    const total = countBra + countOk + countBad;
    return total;
  }

  function snitt() {
    const totalPoints = bra + bad;
    const totalAmount = countBra + countBad;

    const snitt = +(totalPoints / totalAmount).toFixed(1);
    return snitt;
  }

  function positiva() {
    const totalAmount = countBra + countOk + countBad;
    const totalPositiva = countBra + countOk;

    const positiva = Math.round((totalPositiva / totalAmount) * 100);
    return positiva;
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          setBra(bra + 1), setCountBra(countBra + 1);
        }}
      >
        Bra
      </button>
      <button
        onClick={() => {
          setOk(ok + 0), setCountOk(countOk + 1);
        }}
      >
        Helt ok
      </button>
      <button
        onClick={() => {
          setBad(bad - 1), setCountBad(countBad + 1);
        }}
      >
        Dåligt
      </button>
      <div>
        <span style={{ margin: 10 }}>
          {!countBra
            ? "Bra: Ingen feedback mottagen ännu."
            : `Bra: ${countBra}`}
        </span>
        <span style={{ margin: 10 }}>
          {!countOk
            ? "Helt ok: Ingen feedback mottagen ännu."
            : `Helt ok: ${countOk}`}
        </span>
        <span style={{ margin: 10 }}>
          {!countBad
            ? "Dåligt: Ingen feedback mottagen ännu."
            : `Dåligt: ${countBad}`}
        </span>
      </div>
      <div>
        <span style={{ margin: 10 }}>
          {!countBra && !countOk && !countBad
            ? "Totalt: Ingen feedback mottagen ännu."
            : `Totalt: ${total()}`}
        </span>
        <span style={{ margin: 10 }}>
          {!countBra && !countBad
            ? "Snitt: Ingen feedback mottagen ännu."
            : `Snitt: ${snitt()}`}
        </span>
        <span style={{ margin: 10 }}>
          {!countBra && !countOk && !countBad
            ? "Positiva: Ingen feedback mottagen ännu."
            : `Positiva: ${positiva()}%`}
        </span>
      </div>
    </div>
  );
}

export default Feedback;
