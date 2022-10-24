import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Winter from "./pages/Winter";
import SinglewinterProduct from "./pages/SingleWinterProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleWinterProduct from "./pages/SingleWinterProduct";
import Cart from "./features/cart/Cart";
import Favorite from "./features/favorite/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "./features/cart/cartSlice";

function App() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winter" element={<Winter search={search} />} />
        <Route path="/winterproduct/:id" element={<SingleWinterProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
