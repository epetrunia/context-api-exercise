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
import CartContext from './../../contexts/cart/cart.context';

import CartIcon from './../CartIcon';
import CartDropdown from './../CartDropdown';

function Header() {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);
  const currentUser = useContext(CurrentUserContext);
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
        <CartContext.Provider
          value={{
            hidden,
            toggleHidden,
          }}
        >
          <CartIcon />
        </CartContext.Provider>
      </LinksContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

export default Header;
