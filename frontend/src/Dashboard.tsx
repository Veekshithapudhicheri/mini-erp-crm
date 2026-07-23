import Sidebar from "./components/Sidebar";

export default function Dashboard() {
  const cards = [
    {
      title: "Customers",
      value: "120",
      color: "#2563eb",
    },
    {
      title: "Products",
      value: "85",
      color: "#10b981",
    },
    {
      title: "Total Sales",
      value: "₹4,50,000",
      color: "#f59e0b",
    },
    {
      title: "Pending Orders",
      value: "12",
      color: "#ef4444",
    },
  ];

  return (
    <div style={{ display: "flex", background: "#f5f7fb" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "30px" }}>
        <h1 style={{ marginBottom: "30px" }}>Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,.08)",
                borderLeft: `8px solid ${card.color}`,
              }}
            >
              <p
                style={{
                  color: "#666",
                  marginBottom: "15px",
                  fontSize: "16px",
                }}
              >
                {card.title}
              </p>

              <h2
                style={{
                  color: card.color,
                  fontSize: "34px",
                  margin: 0,
                  fontWeight: "bold",
                }}
              >
                {card.value}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}