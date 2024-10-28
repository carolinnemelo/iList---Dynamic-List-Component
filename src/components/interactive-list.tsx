import { createTableHeads, createTableRowData } from "../functions";



const productData = [
  { name: "Laptop", price: 1500, status: "In Stock" },
  { name: "Desk Lamp", price: 45, status: "Low Stock" },
  { name: "Wireless Mouse", price: 30, status: "Out of Stock" },
];

export function InteractiveList() {
  const tableHeads = createTableHeads(productData);
  const tableData = createTableRowData(productData);

  return (
    <div >
      <div id="list__title">
        <h1>List Title</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <th></th>
            {tableHeads}
            </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </div>
  );
}


