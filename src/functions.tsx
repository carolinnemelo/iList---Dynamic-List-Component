import { Data } from "./types";

export function createTableHeads(data: Data) {
  const keys: string[] = Object.keys(data[0]);
  return keys.map((key) => {
    return (
      <th>
        <h3>{key}</h3>
      </th>
    );
  });
}

export function createTableRowData(data: Data) {
  return data.map((e) => {
    return (
      <>
        <tr className="">
        <th>{e.id}</th>
          <td>{e.name}</td>
          <td>{e.price}</td>
          <td>{e.status}</td>
        </tr>
      </>
    );
  });
}
