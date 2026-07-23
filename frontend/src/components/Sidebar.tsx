import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        background: "#111827",
        color: "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>Mini ERP</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "30px" }}>
        <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </Link>

        <Link to="/customers" style={{ color: "white", textDecoration: "none" }}>
          Customers
        </Link>

        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>

        <Link to="/sales" style={{ color: "white", textDecoration: "none" }}>
          Sales Challan
        </Link>

        <Link to="/reports" style={{ color: "white", textDecoration: "none" }}>
          Reports
        </Link>

        <Link to="/" style={{ color: "red", textDecoration: "none" }}>
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;