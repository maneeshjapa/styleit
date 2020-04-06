import React from "react";
import "../styles/Cart-Icon.scss";
import { ReactComponent as ShoppingIcon } from "../assests/Shopping-Icon.svg";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
