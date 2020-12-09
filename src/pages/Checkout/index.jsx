import React, { useContext } from 'react';

import CheckoutItem from './../../components/CheckoutItem';
import StripeButton from './../../components/StripeButton';

import {
  CheckoutContainer,
  HeaderContainer,
  HeaderBlock,
  Total,
  Warning,
} from './Checkout.style';
import { CartContext } from './../../providers/cart/cart.provider';

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

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
        <span>Total: {cartTotal}$</span>
      </Total>
      <Warning>
        Please use the following test credit card for payments
        <br />
        Card number: 5555 5555 5555 4444, exp: 01/23, CVV: 123
      </Warning>
      <StripeButton price={cartTotal} />
    </CheckoutContainer>
  );
}

export default Checkout;
