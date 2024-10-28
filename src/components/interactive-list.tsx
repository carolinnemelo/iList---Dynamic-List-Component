const productData = [
  { name: "Laptop", price: 1500, status: "In Stock" },
  { name: "Desk Lamp", price: 45, status: "Low Stock" },
  { name: "Wireless Mouse", price: 30, status: "Out of Stock" },
];

// const itemsName = productData.map((product) => {
//   return (
//     <>
//       <li className="flex gap-3 ">
//         <p id="list__item-name">{product.name}</p>
//         <p id="list__item-price">{product.price}</p>
//         <p id="list__item-status">{product.status}</p>
//       </li>
//     </>
//   );
// });
export function InteractiveList() {
  const tableHeads = createTableHeads(productData);

  return (
    <>
      <div id="list__title">
        <h1>List Title</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>{tableHeads}</tr>
          </thead>
          <ul id="list"></ul>
        </table>
      </div>
    </>
  );
}

function createTableHeads(data: object[]) {
  const keys: string[] = Object.keys(data[0]);
  return keys.map((key) => {
    return (
      <th>
        <h3>{key}</h3>
      </th>
    );
  });
}

