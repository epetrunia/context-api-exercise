import { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart } from './utils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
});

function CartProvider({ children }) {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, satCartItemsCount] = useState(0);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
