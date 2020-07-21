import React from "react";
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "../styles/Cart-Icon.styles";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../redux/cart/CartActions";
import { selectCartItemsCount } from "../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
  <CartContainer onClick={toggleCartDropdown}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
