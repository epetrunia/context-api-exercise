import React from 'react';
import { CollectionPreviewContainer } from './CollectionPreview.style';
import CollectionItem from './../CollectionItem';

function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <h1>{title.toUpperCase()}</h1>
      <div>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;
