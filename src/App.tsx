import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Orders from "./features/cart/Orders";
import Checkout from "./features/cart/Checkout";
import OrderComplete from "./features/cart/OrderComplete";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route element={<Cart />}>
          <Route index element={<Navigate replace to="cart" />} />
          <Route path="cart" element={<Orders />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<OrderComplete />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
