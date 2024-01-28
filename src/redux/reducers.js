import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_QUANTITY,
  CLEAR_CART, // Import the CLEAR_CART action

} from './actions';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.itemId
            ? {
              ...item,
              quantity: action.payload.newQuantity,
              totalPrice: action.payload.updatedTotalPrice,
            }
            : item
        ),
      };
      case CLEAR_CART: // Handle CLEAR_CART
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
