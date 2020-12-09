import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  BackgroundWrapper,
  Footer,
  FooterName,
  FooterPrice,
  AddButton,
} from './CollectionItem.style';

import { addItem } from '../../redux/cart/actions';

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
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

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
