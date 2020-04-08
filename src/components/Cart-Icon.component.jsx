import React from "react";
import "../styles/Cart-Icon.scss";
import { ReactComponent as ShoppingIcon } from "../assests/Shopping-Icon.svg";
import { connect } from "react-redux";
import toggleCartHidden from "../redux/cart/CartActions";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
