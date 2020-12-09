import React, { useContext } from 'react';

import {
  CartIconContainer,
  BagIconContainer,
  ItemsCount,
} from './CartIcon.style';

import { CartContext } from './../../providers/cart/cart.provider';

function CartIcon() {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleHidden}>
      <BagIconContainer />
      <ItemsCount>{cartItemsCount}</ItemsCount>
    </CartIconContainer>
  );
}

export default CartIcon;
