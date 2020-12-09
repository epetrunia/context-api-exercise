import React, { useContext } from 'react';

import CollectionItem from '../../components/CollectionItem';

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems,
} from './Collection.style';
import CollectionContext from './../../contexts/collections/collections.context';

function Collection({ match }) {
  const collections = useContext(CollectionContext);
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
}

export default Collection;
