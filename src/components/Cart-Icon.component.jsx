import React from "react";
import "../styles/Cart-Icon.scss";
import { ReactComponent as ShoppingIcon } from "../assests/Shopping-Icon.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../redux/cart/CartActions";

const CartIcon = ({ toggleCartDropdown }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
