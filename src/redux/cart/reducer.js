import cartActionTypes from './types';
import { addItemToCart, decreaseItemToCart } from './utils';

const initialState = {
  hidden: true,
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };

    case cartActionTypes.DECREASE_ITEMS:
      return {
        ...state,
        items: decreaseItemToCart(state.items, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
