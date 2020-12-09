import React from 'react';

import CollectionItem from '../../components/CollectionItem';

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems,
} from './Collection.style';

import CollectionContext from './../../contexts/collections/collections.context';

function Collection({ match }) {
  return (
    <CollectionContext.Consumer>
      {(collections) => {
        const collection = collections[match.params.collectionId];
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
      }}
    </CollectionContext.Consumer>
  );
}

export default Collection;
