import { Data } from "../../types";


export function tableHeadsData(data: Data) {
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
