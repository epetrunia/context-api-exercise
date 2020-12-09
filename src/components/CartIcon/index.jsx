import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CartIconContainer,
  BagIconContainer,
  ItemsCount,
} from './CartIcon.style';

import { selectCartItemsCount } from './../../redux/cart/selectors';
import { CartContext } from './../../providers/cart/cart.provider';

function CartIcon({ itemCount }) {
  const { toggleHidden } = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleHidden}>
      <BagIconContainer />
      <ItemsCount>{itemCount}</ItemsCount>
    </CartIconContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
