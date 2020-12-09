import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from './../../components/CheckoutItem';
import StripeButton from './../../components/StripeButton';

import {
  CheckoutContainer,
  HeaderContainer,
  HeaderBlock,
  Total,
  Warning,
} from './Checkout.style';
import {
  selectCartItems,
  selectCartItemsTotal,
} from './../../redux/cart/selectors';

function Checkout({ cartItems, total }) {
  return (
    <CheckoutContainer>
      <HeaderContainer>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </HeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>
        <span>Total: {total}$</span>
      </Total>
      <Warning>
        Please use the following test credit card for payments
        <br />
        Card number: 5555 5555 5555 4444, exp: 01/23, CVV: 123
      </Warning>
      <StripeButton price={total} />
    </CheckoutContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(Checkout);
