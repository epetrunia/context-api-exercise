import React, { useContext } from 'react';
import { withRouter } from 'react-router';

import {
  CartDropdownContainer,
  CartItemsContainer,
  DropdownButton,
  EmptyCartMessage,
} from './CartDropdown.style';

import { toggleCartHidden } from './../../redux/cart/actions';
import { CartContext } from './../../providers/cart/cart.provider';

import CartItem from './../CartItem';

function CartDropdown({ history, dispatch }) {
  const { cartItems } = useContext(CartContext);
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
          dispatch(toggleCartHidden());
        }}
      >
        go to checkout
      </DropdownButton>
    </CartDropdownContainer>
  );
}

export default withRouter(CartDropdown);
