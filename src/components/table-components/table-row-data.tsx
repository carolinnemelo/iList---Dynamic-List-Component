import { Data } from "../../types";

export function tableRowData(data: Data, tableHeads: Array<keyof Data[0]>) {
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