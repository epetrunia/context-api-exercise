import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
} from './MenuItem.style';

function MenuItem({ title, imageUrl, large, linkUrl, history, match }) {
  return (
    <MenuItemContainer
      className={large ? 'large' : ''}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='backgroundImage'
        imageUrl={imageUrl}
      ></BackgroundImageContainer>
      <ContentContainer>
        <h1>{title.toUpperCase()}</h1>
        <span>Shop Now</span>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);
