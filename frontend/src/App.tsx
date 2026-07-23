import { useEffect, useState } from "react";
import './App.css';
import API from "./api";
function App() {
  const [customers, setCustomers] = useState<any[]>([]);
const [products, setProducts] = useState<any[]>([]);

useEffect(() => {

  API.get("/customers")
    .then((res) => {
      setCustomers(res.data);
    })
    .catch((err) => {
      console.log(err);
    });


  API.get("/products")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

}, []);
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Mini ERP</h2>

        <nav>
          <a>Dashboard</a>
          <a>Customers</a>
          <a>Products</a>
          <a>Sales Challan</a>
          <a>Reports</a>
        </nav>
      </aside>

      <main className="content">
        <header>
          <h1>Dashboard</h1>
          <button>Logout</button>
        </header>

        <section className="cards">
          <div className="card">
            <h3>Total Customers</h3>
            <p>{customers.length}</p>
          </div>

          <div className="card">
            <h3>Total Products</h3>
           <p>{products.length}</p>
          </div>

          <div className="card">
            <h3>Total Sales</h3>
            <p>₹45,000</p>
          </div>

          <div className="card">
            <h3>Pending Orders</h3>
            <p>12</p>
          </div>
        </section>

        <section className="table-box">
          <h2>Recent Customers</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
{
  customers.map((customer:any)=>(
    <tr key={customer.id}>
      <td>{customer.name}</td>
      <td>{customer.email}</td>
      <td>Active</td>
    </tr>
  ))
}
</tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

export default App