import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CartIconContainer,
  BagIconContainer,
  ItemsCount,
} from './CartIcon.style';

import { toggleCartHidden } from '../../redux/cart/actions';
import { selectCartItemsCount } from './../../redux/cart/selectors';

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <BagIconContainer />
      <ItemsCount>{itemCount}</ItemsCount>
    </CartIconContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
