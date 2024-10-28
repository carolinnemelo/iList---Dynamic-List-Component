import { createTableHeads, createTableRowData } from "../functions";



const productData = [
  { id: 1, name: "Laptop", price: 1500, status: "In Stock"},
  { id: 2, name: "Desk Lamp", price: 45, status: "Low Stock" },
  { id: 3, name: "Wireless Mouse", price: 30, status: "Out of Stock" },
];

export function InteractiveList() {
  const tableHeads = createTableHeads(productData);
  const tableData = createTableRowData(productData);

  return (
    <div className="py-4">
      <div>
        <h1 className="text-3xl font-bold text-center">Ilist</h1>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-zebra">
          <thead className="text-lg uppercase">
            {tableHeads}
            </thead>
          <tbody className="bg-base-content bg-opacity-30 ">{tableData}</tbody>
        </table>
      </div>
    </div>
  );
}


