import React from "react";
import "../styles/Cart-Dropdown.scss";
import CustomButton from "./CustomButton.component";
import CartItem from "./CartItem.component";
import { connect } from "react-redux";
import { selectCartItems } from "../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartDropdown } from "../redux/cart/CartActions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Please add items to the cart</span>
      )}
    </div>
    <CustomButton onClick={
      () => {history.push("/checkout");
      dispatch(toggleCartDropdown());
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
