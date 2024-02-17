import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"; // Import the ShoppingCart icon
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="store-link" activeClassName="active">
        FakeStore
      </NavLink>
      <NavLink to="/cart" activeClassName="active">
        <ShoppingCart className="cart-icon" size={32} /> {/* Display only the picture of the cart */}
      </NavLink>
    </div>
  );
};

export default Navbar;
