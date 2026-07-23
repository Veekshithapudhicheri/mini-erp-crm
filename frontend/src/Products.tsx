import Sidebar from "./components/Sidebar";

const products = [
  { id: 1, name: "Laptop", price: 55000, stock: 25 },
  { id: 2, name: "Keyboard", price: 900, stock: 100 },
  { id: 3, name: "Mouse", price: 700, stock: 80 },
  { id: 4, name: "Monitor", price: 12000, stock: 15 },
];

export default function Products() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Products</h1>

        <table width="100%" border={1} cellPadding={10}>
          <thead style={{ background: "#2563eb", color: "white" }}>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>₹{p.price}</td>
                <td>{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}