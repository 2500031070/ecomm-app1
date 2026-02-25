import { Routes, Route, HashRouter } from "react-router-dom";
 
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Products1 from "./components/Products1";
import Admin from "./components/Admin";

function App() {
  return (
    <HashRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products1 />} />
        <Route path="/cart" element={<Cart />} />

        {/* ADMIN ROUTE */}
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </HashRouter>
  );
}

export default App;