import { Data } from "./types";

export function createTableHeads(data: Data) {
  if (data.length === 0) return null;
  const keys = Object.keys(data[0])  as Array<keyof Data[0]>;
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


export function createTableRowData(data: Data, tableHeads: Array<keyof Data[0]>) {
  return data.map((e, index) => {
    return (
        <tr key={e.id}>
          <td>{index + 1}</td>
        {tableHeads.map((head) => (
          <td key={head}>{e[head] || "-"}</td>
        ))}
      </tr>
    );
  });
}