import React from "react";

function TableRow({ row }) {
  return (
    <tr>
      <td key={row.name}>{row.name}</td>
      <td key={row.age}>{row.age}</td>
    </tr>
  );
}

export default TableRow;
