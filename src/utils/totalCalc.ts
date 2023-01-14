import { TCartObj } from './../store/cart/types';
export const totalCalc = (cartPizzas: TCartObj[]) => {
  const totalPrice = cartPizzas.reduce((sum, prev) => prev.count * prev.price + sum, 0);
  const totalCount = cartPizzas.reduce((sum, prev) => prev.count + sum, 0);
  return {
    totalPrice,
    totalCount,
  };
};
