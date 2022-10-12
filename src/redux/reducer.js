import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRODUCT,
  EMPTY_CART,
} from './ActionType';

const initialState = {
  products: [],
  cartProduct: [],
};
const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {...state, products: action.payload};

    case ADD_TO_CART:
      return {
        ...state,
        cartProduct:
          state?.cartProduct.length === 0
            ? [action.payload]
            : state?.cartProduct.push(action.payload),
      };

    case REMOVE_FROM_CART:
      return {
        cartProduct: state.cartProduct.filter(
          item => item.id !== action.payload,
        ),
      };

    case EMPTY_CART:
      return [];

    default:
      return state;
  }
};

export {ShoppingReducer};
