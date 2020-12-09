import React from 'react';
import { connect } from 'react-redux';

import {
  CheckoutItemContainer,
  ImageWrapper,
  TextContainer,
  QuantityContainer,
  RemoveButton,
} from './CheckoutItem.style';
import { decreaseItem, removeItem, addItem } from './../../redux/cart/actions';

function CheckoutItem({ cartItem, removeItem, decreaseItem, addItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageWrapper>
        <img src={imageUrl} alt={name} />
      </ImageWrapper>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => decreaseItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}$</TextContainer>
      <RemoveButton onClick={() => removeItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
