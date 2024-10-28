const productData = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1500,
    stock: 30,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Headphones",
    category: "Accessories",
    price: 200,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 80,
    stock: 15,
    status: "In Stock",
  },
  {
    id: 4,
    name: "Desk Lamp",
    category: "Furniture",
    price: 45,
    stock: 5,
    status: "Low Stock",
  },
  {
    id: 5,
    name: "Smartphone",
    category: "Electronics",
    price: 999,
    stock: 25,
    status: "In Stock",
  },
  {
    id: 6,
    name: "Office Chair",
    category: "Furniture",
    price: 250,
    stock: 2,
    status: "Low Stock",
  },
  {
    id: 7,
    name: "Blender",
    category: "Home Appliances",
    price: 60,
    stock: 10,
    status: "In Stock",
  },
  {
    id: 8,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 30,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 9,
    name: "Bookshelf",
    category: "Furniture",
    price: 120,
    stock: 12,
    status: "In Stock",
  },
];

export function InteractiveList() {
  const itemsName = productData.map((product) => {
    return (
      <>
        <li className="flex gap-3 ">
          <p id="list__item-name">{product.name}</p>
          <p id="list__item-category">{product.category}</p>
          <p id="list__item-price">{product.price}</p>
          <p id="list__item-status">{product.status}</p>
        </li>
      </>
    );
  });
  return (
    <>
      <div id="list__title">
        <h1>List Title</h1>
      </div>
      <div>
        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
      <ul id="list">
        {itemsName}
      </ul>

        </table>

      </div>
    </>
  );
}