import React, { useContext } from 'react';
import { connect } from 'react-redux';

import {
  CheckoutItemContainer,
  ImageWrapper,
  TextContainer,
  QuantityContainer,
  RemoveButton,
} from './CheckoutItem.style';
import { CartContext } from './../../providers/cart/cart.provider';

function CheckoutItem({ cartItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  return (
    <CheckoutItemContainer>
      <ImageWrapper>
        <img src={imageUrl} alt={name} />
      </ImageWrapper>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}$</TextContainer>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(CheckoutItem);
