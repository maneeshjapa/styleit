import React from "react";
import "../styles/Cart-Icon.scss";
import { ReactComponent as ShoppingIcon } from "../assests/Shopping-Icon.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../redux/cart/CartActions";
import { selectCartItemsCount } from "../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
