import React, { useContext, useState } from 'react';

import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  OptionLink,
} from './Header.style';

import { ReactComponent as Logo } from './../../assets/crown.svg';
import { auth } from '../../firebase/utils';
import CurrentUserContext from './../../contexts/currentUser/currentUser.context';
import { CartContext } from './../../providers/cart/cart.provider';

import CartIcon from './../CartIcon';
import CartDropdown from './../CartDropdown';

function Header() {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);
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

export default Header;
