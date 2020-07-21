import React from "react";
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "../styles/CartItem.styles";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
