import React from "react";
import TableRow from "./TableRow";

function ObjectHolder({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <TableRow row={row} key={row.name} />
        ))}
      </tbody>
    </table>
  );
}

export default ObjectHolder;
