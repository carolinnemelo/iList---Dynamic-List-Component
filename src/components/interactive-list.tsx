type Data = {
    name: string;
    price: number;
    status: string;
}[]

const productData = [
  { name: "Laptop", price: 1500, status: "In Stock" },
  { name: "Desk Lamp", price: 45, status: "Low Stock" },
  { name: "Wireless Mouse", price: 30, status: "Out of Stock" },
];

export function InteractiveList() {
  const tableHeads = createTableHeads(productData);
  const tableData = createTableRowData(productData);

  return (
    <>
      <div id="list__title">
        <h1>List Title</h1>
      </div>
      <div>
        <table>
          <thead>{tableHeads}</thead>
          <tbody>{tableData}</tbody>
          <ul id="list"></ul>
        </table>
      </div>
    </>
  );
}

function createTableHeads(data: Data) {
  const keys: string[] = Object.keys(data[0]);
  return keys.map((key) => {
    return (
      <th>
        <h3>{key}</h3>
      </th>
    );
  });
}

function createTableRowData(data: Data) {
  return data.map((e) => {
    return (
      <>
        <tr>
          <td>{e.name}</td>
          <td>{e.price}</td>
          <td>{e.status}</td>
        </tr>
      </>
    );
  });
}

