import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Products1() {

  const navigate = useNavigate();
  const products =
    JSON.parse(localStorage.getItem("products")) || [];

  const handleAddToCart = (product) => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {

      const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

      cart.push(product);

      localStorage.setItem("cart", JSON.stringify(cart));

      navigate("/cart");

    } else {
      alert("Please login first!");
      navigate("/login");
    }
  };

  return (
    <>
      <Header />

      <section className="products">

        {products.length === 0 ? (
          <h2>No Approved Products Available</h2>
        ) : (
          products.map((p) => (
            <div key={p.id} className="product">
              <img src={p.image} alt={p.title} width="150" />
              <h3>{p.title}</h3>
              <p>Price: ${p.price}</p>

              <button onClick={() => handleAddToCart(p)}>
                Add to Cart
              </button>
            </div>
          ))
        )}

      </section>

      <Footer />
    </>
  );
}

export default Products1;
