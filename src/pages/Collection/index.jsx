import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem';

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems,
} from './Collection.style';
import { selectCollection } from './../../redux/shop/selectors';

function Collection({ collection }) {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionContainer>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
