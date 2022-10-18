import React, { useState, useCallback } from "react";
import axios from "axios";
import { useEffect } from "react";

function PhoneBook() {
  const [people, setPeople] = useState([
    { name: "Ryan Dahl", phone: "0701234567" },
  ]);
  const [input, setInput] = useState({ name: "", phone: "" });
  const [error, setError] = useState({ name: "", phone: "" });

  useEffect(() => {
    getPerson();
  }, []);

  const handleInputChange = useCallback(({ target }) => {
    const { name, value } = target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const trimmedInput = {
        name: input.name.trim(),
        phone: input.phone.trim(),
      };

      if (Object.keys(trimmedInput).some((key) => !input[key].length)) {
        return;
      }
      const regEx = {
        name: new RegExp(`^${trimmedInput.name}$`, "gi"),
        phone: new RegExp(`^${trimmedInput.phone}$`, "gi"),
        test(name, phone) {
          if (this.name.test(name)) return "name";
          if (this.phone.test(phone)) return "phone";
          return null;
        },
      };
      let key;
      for (const person of people) {
        const exists = regEx.test(person.name, person.phone);
        if (exists) {
          key = exists;
          break;
        }
      }
      if (key) {
        return setError({
          ...error,
          [key]:
            key === "name"
              ? "Det finns redan en person med det namnet."
              : "Det finns redan en person med det telefonnumret.",
        });
      }
      const addPerson = async () => {
        const res = await axios.post(`http://localhost:3000/people`, {
          name: input.name,
          phone: input.phone,
        });
      };
      addPerson();
      setPeople([...people, { ...input }]);
      setInput({ name: "", phone: "" });
    },
    [people, input]
  );

  const ErrorMsg = ({ message }) => {
    return !message ? null : <code>{message}</code>;
  };

  const getPerson = async () => {
    const { data } = await axios.get(`http://localhost:3000/people`);
    setPeople(data);
  };

  return (
    <div>
      <h2>Telefonbok</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <ErrorMsg message={error.name} />
          <input
            required
            name="name"
            autoComplete="off"
            type="text"
            placeholder="Enter name..."
            value={input.name}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <h2>Nummer</h2>
        <ErrorMsg message={error.phone} />
        <div>
          <input
            required
            name="phone"
            autoComplete="off"
            type="number"
            placeholder="Enter num..."
            pattern="[0-9]{10}"
            value={input.phone}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <button type="submit">lägg till</button>
        </div>
      </form>
      <div>
        <h3>People</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Num</th>
            </tr>
          </thead>
          <tbody>
            {people.map((p) => (
              <tr key={p.name}>
                <td>{p.name}</td>
                <td>{p.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
    </div>
  );
}

export default PhoneBook;
