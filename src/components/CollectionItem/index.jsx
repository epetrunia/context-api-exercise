import React, { useContext } from 'react';

import {
  CollectionItemContainer,
  BackgroundWrapper,
  Footer,
  FooterName,
  FooterPrice,
  AddButton,
} from './CollectionItem.style';

import { CartContext } from './../../providers/cart/cart.provider';

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);
  return (
    <CollectionItemContainer>
      <BackgroundWrapper
        className='image'
        imageUrl={imageUrl}
      ></BackgroundWrapper>
      <Footer>
        <FooterName>{name}</FooterName>
        <FooterPrice>{price}$</FooterPrice>
      </Footer>
      <AddButton inverted onClick={() => addItem(item)}>
        add to cart
      </AddButton>
    </CollectionItemContainer>
  );
}

export default CollectionItem;
