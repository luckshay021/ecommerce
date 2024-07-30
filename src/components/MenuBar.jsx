import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <div className="data_container">
      <div className="p_container">
        <Link to="/">Home</Link>
        <br />
      </div>
      <div className="p_container">
        <Link to="/about">About</Link>
        <br />
      </div>

      <div className="p_container">
        <Link to="/cart">Cart</Link>
        <br />
      </div>
      <div className="p_container">
        <Link to="/contact">Contact</Link>
        <br />
      </div>
      <div className="p_container">
        <Link to="/faq">Faq</Link>
        <br />
      </div>
      <div className="p_container">
        <Link to="/shop">Shop</Link>
        <br />
      </div>
      <div className="p_container">
        <Link to="/product">Product</Link>
        <br />
      </div>
    </div>
  );
}
