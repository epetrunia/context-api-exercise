import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../MenuItem';
import { DirectoryContainer } from './Directory.style';
import { selectDirectorySections } from './../../redux/directory/selectors';

function Directory({ sections }) {
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
