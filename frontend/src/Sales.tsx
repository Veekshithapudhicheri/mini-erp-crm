import Sidebar from "./components/Sidebar";

const sales = [
  {
    invoice: "INV001",
    customer: "Rahul Sharma",
    amount: 15000,
    date: "20 Jul 2026",
  },
  {
    invoice: "INV002",
    customer: "Priya Singh",
    amount: 22000,
    date: "21 Jul 2026",
  },
  {
    invoice: "INV003",
    customer: "Sneha Reddy",
    amount: 18000,
    date: "22 Jul 2026",
  },
];

export default function Sales() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Sales Challan</h1>

        <table width="100%" border={1} cellPadding={10}>
          <thead style={{ background: "#2563eb", color: "white" }}>
            <tr>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {sales.map((s) => (
              <tr key={s.invoice}>
                <td>{s.invoice}</td>
                <td>{s.customer}</td>
                <td>₹{s.amount}</td>
                <td>{s.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}