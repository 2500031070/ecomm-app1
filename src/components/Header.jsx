import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();  // ✅ add this
  const name = localStorage.getItem("username");  // ✅ add this

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("cart");
    navigate("/");   // ✅ small n
  };

  return (
    <header>
      <h1>🛍 KL University Shop</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/Products1">Products</Link>

        {name && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>

      <div id="user-display">
        {name ? `Welcome, ${name}` : ""}
      </div>
    </header>
  );
}

export default Header;
