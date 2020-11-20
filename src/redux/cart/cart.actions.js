import { CartActionTypes } from './cart.types';

//no need to pass payload
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
