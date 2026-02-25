import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setAllProducts(data.products);
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
      alert("Product Approved");
    } else {
      alert("Already Approved");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Admin Dashboard</h2>

      <button onClick={fetchProducts}>Fetch Products</button>

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
    </div>
  );
}

export default Admin;