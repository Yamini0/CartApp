import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PRODUCT,
  EMPTY_CART,
} from './ActionType';

export const setProducts = data => {
  console.log('data', data);
  return {
    type: SET_PRODUCT,
    payload: data,
  };
};
export const addItemToCart = data => {
  console.log('----->dataaddItemToCart', data);
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
    payload: [],
  };
};
