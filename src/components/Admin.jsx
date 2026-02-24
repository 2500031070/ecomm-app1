import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isAdminLoggedIn") === "true"
  );

  const [allProducts, setAllProducts] = useState([]);

  const navigate = useNavigate();

  // ---------------- LOGIN ----------------
  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdminLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("Invalid Admin Credentials");
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setAllProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  };
  const approveProduct = (product) => {

    const approved =
      JSON.parse(localStorage.getItem("products")) || [];

    const exists = approved.find((p) => p.id === product.id);

    if (!exists) {
      approved.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail
      });

      localStorage.setItem("products", JSON.stringify(approved));

      alert("Product Approved ");
    } else {
      alert("Already Approved");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>

      {!isLoggedIn ? (
        <>
          <h2>Admin Login</h2>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <br /><br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <br /><br />

          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h2>Admin Dashboard</h2>

          <button onClick={fetchProducts}>
            Fetch Products
          </button>

          <br /><br />

          <button onClick={handleLogout}>
            Logout
          </button>

          <hr />

          {allProducts.map((p) => (
            <div key={p.id} style={{ marginBottom: "20px" }}>
              <img src={p.thumbnail} width="100" alt="" />
              <h4>{p.title}</h4>
              <p>${p.price}</p>

              <button onClick={() => approveProduct(p)}>
                Approve
              </button>
            </div>
          ))}
        </>
      )}

    </div>
  );
}

export default Admin;
