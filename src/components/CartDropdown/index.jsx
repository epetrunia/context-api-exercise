import React, { useContext } from 'react';
import { withRouter } from 'react-router';

import {
  CartDropdownContainer,
  CartItemsContainer,
  DropdownButton,
  EmptyCartMessage,
} from './CartDropdown.style';

import { CartContext } from './../../providers/cart/cart.provider';

import CartItem from './../CartItem';

function CartDropdown({ history }) {
  const { cartItems, toggleHidden } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        )}
      </CartItemsContainer>
      <DropdownButton
        onClick={() => {
          history.push('/checkout');
          toggleHidden();
        }}
      >
        go to checkout
      </DropdownButton>
    </CartDropdownContainer>
  );
}

export default withRouter(CartDropdown);
