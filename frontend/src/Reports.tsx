import Sidebar from "./components/Sidebar";

export default function Reports() {
  const reports = [
    {
      title: "Sales Report",
      value: "₹4,50,000",
      color: "#2563eb",
    },
    {
      title: "Customer Report",
      value: "120 Customers",
      color: "#10b981",
    },
    {
      title: "Product Report",
      value: "85 Products",
      color: "#f59e0b",
    },
  ];

  return (
    <div style={{ display: "flex", background: "#f5f7fb" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Reports</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {reports.map((report) => (
            <div
              key={report.title}
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 6px 18px rgba(0,0,0,.08)",
                borderTop: `8px solid ${report.color}`,
              }}
            >
              <h2
                style={{
                  color: "#444",
                  marginBottom: "20px",
                }}
              >
                {report.title}
              </h2>

              <h1
                style={{
                  color: report.color,
                  fontSize: "38px",
                  margin: 0,
                }}
              >
                {report.value}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}