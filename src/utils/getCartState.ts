import { TCartObj } from './../store/cart/types';
import { totalCalc } from './totalCalc';
export const getCartState = () => {
  const storage = localStorage.getItem('cart');
  const cartPizzas = storage ? (JSON.parse(storage) as TCartObj[]) : [];
  const { totalCount, totalPrice } = totalCalc(cartPizzas);
  return {
    cartPizzas,
    totalCount,
    totalPrice,
  };
};
