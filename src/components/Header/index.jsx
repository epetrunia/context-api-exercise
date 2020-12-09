import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  OptionLink,
} from './Header.style';

import { ReactComponent as Logo } from './../../assets/crown.svg';
import { auth } from '../../firebase/utils';
import { selectCartHidden } from './../../redux/cart/selectors';
import { selectCurrentUser } from './../../redux/user/selectors';

import CartIcon from './../CartIcon';
import CartDropdown from './../CartDropdown';

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <LinksContainer>
        <OptionLink to='/shop'>shop</OptionLink>
        <OptionLink to='/contacts'>contacts</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            sign out
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>sign in</OptionLink>
        )}
        <CartIcon />
      </LinksContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
