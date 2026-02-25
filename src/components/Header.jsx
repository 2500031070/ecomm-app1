import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const name = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <header>
      <h1>🛍 KL University Shop</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>

        {/* Show Admin only after user login */}
        {name && (
          <Link to="/admin">Admin</Link>
        )}

        {/* Logout */}
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