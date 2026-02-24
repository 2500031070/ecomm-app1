import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

import mobile1 from "../assets/images/mobile1.png";
import mobile2 from "../assets/images/mobile2.png";
import mobile3 from "../assets/images/mobile3.png";

import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      navigate("/cart");
    } else {
      alert("Please login first!");
      navigate("/login");
    }
  };

  return (
    <>
      <Header />

      <div className="products">
        <div className="product">
          <img src={mobile1} alt="Apple iPhone 15" />
          <h3>Apple iPhone 15</h3>
          <p>₹79,999</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src={mobile2} alt="Samsung Galaxy S24" />
          <h3>Samsung Galaxy S24</h3>
          <p>₹74,999</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <div className="product">
          <img src={mobile3} alt="Apple iPhone 16" />
          <h3>Apple iPhone 16</h3>
          <p>₹89,999</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product;
