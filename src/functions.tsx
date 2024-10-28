import { Data } from "./types";

export function createTableHeads(data: Data) {
  if (data.length === 0) return null;
  const keys = Object.keys(data[0]);
    return (
      <>
        {keys.map((key) => (
          <th key={key}>
            <h3>{key}</h3>
          </th>
        ))}
      </>
    );
}



export function createTableRowData(data: Data, tableHeads) {
  return data.map((e) => {
    return (
      <tr key={e.id}>
        {tableHeads.map((head) => (
          <td key={head}>{e[head] || "-"}</td>
        ))}
      </tr>
    );
  });
}