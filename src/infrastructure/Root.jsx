import { Routes, Route } from "react-router-dom";
import Home from "../app/Home";
import About from "../app/About";
import FAQ from "../app/FAQ";
import Cart from "../app/Cart";
import Shop from "../app/Shop";
import Contact from "../app/Contact";
import SingleShopProduct from "../app/SingleShopProduct";
import Product from "../app/product";

// import ProductID from "../app../Shop/ProductID";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/shop/:id" element={<SingleShopProduct />}></Route>
      {/* <Route path="/shop/productid" element={<ProductID />}></Route> */}
    </Routes>
  );
}
