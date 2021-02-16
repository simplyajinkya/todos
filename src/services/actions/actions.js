import { ADD_TO_CART, REMOVE_TO_CART } from '../constants';
export const addToCart = (data) => {
  // console.log('Action', data);
  return {
    type: ADD_TO_CART,
    data
  }
};

export const removeToCart = () => {
  console.log('Action Remove');
  return {
    type: REMOVE_TO_CART
  }
};