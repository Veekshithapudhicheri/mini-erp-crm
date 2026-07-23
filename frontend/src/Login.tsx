import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "300px" }}>
        <h2>Mini ERP Login</h2>

        <input
          type="text"
          placeholder="Username"
          style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", marginBottom: "20px", padding: "10px" }}
        />

        <button
          style={{ width: "100%", padding: "10px" }}
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>
      </div>
    </div>
  );
}