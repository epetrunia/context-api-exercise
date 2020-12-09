import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from './../CollectionPreview';

import { CollectionOverviewContainer } from './CollectionOverview.style';
import { selectCollectionForPreview } from './../../redux/shop/selectors';

function CollectionOverview({ collections }) {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
