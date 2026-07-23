import Sidebar from "./components/Sidebar";

const customers = [
  { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", phone: "9876543210", status: "Active" },
  { id: 2, name: "Priya Singh", email: "priya@gmail.com", phone: "9876501234", status: "Active" },
  { id: 3, name: "Amit Kumar", email: "amit@gmail.com", phone: "9876511111", status: "Inactive" },
  { id: 4, name: "Sneha Reddy", email: "sneha@gmail.com", phone: "9988776655", status: "Active" },
];

export default function Customers() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Customers</h1>

        <input
          type="text"
          placeholder="Search Customer..."
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "20px"
          }}
        />

        <table width="100%" border={1} cellPadding={10}>
          <thead style={{ background: "#2563eb", color: "white" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}