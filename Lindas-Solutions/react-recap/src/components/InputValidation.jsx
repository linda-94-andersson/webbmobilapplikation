import React, { useMemo, useState } from "react";

function InputValidation() {
  const [input, setInput] = useState("");

  const isValid = useMemo(() => {
    return (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/.test(
        input
      ) && ! /(.+)(\1){3}/g.test(input)
    );
  }, [input]);

  return (
    <div>
      <h3>useMemo validering!</h3>
      <label>
        Skriv något! (Och validera så innehållet är: <br/> Åtminstone 10 tecken <br/> En blandning av uppercase och lowercase <br/> En blandning av nummer och tecken <br/> Åtminstone ett specialtecken (! @ # ? ]) <br/> Ej mer än 3 av samma tecken i följd )
        <br/>
        <input
          style={{ marginLeft: 10 }}
          type="password"
          id="input"
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <p style={isValid ? { color: "green" } : { color: "red" }}>
        {isValid ? "Valid input" : "Ej valid input"}
      </p>
    </div>
  );
}

export default InputValidation;
