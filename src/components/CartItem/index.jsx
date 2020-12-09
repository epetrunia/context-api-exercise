import React from 'react';
import {
  CartItemContainer,
  CartItemImage,
  CartItemDescription,
} from './CartItem.style';

function CartItem({ item: { name, price, quantity, imageUrl } }) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <CartItemDescription>
        <span>{name}</span>
        <span>
          {quantity} x {price}$
        </span>
      </CartItemDescription>
    </CartItemContainer>
  );
}

export default CartItem;
