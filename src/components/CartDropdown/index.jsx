import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import {
  CartDropdownContainer,
  CartItemsContainer,
  DropdownButton,
  EmptyCartMessage,
} from './CartDropdown.style';
import { selectCartItems } from './../../redux/cart/selectors';
import { toggleCartHidden } from './../../redux/cart/actions';

import CartItem from './../CartItem';

function CartDropdown({ items, history, dispatch }) {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
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

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
