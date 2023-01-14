import React from 'react';
import { IconButton, Stack } from '@mui/material';
import { HighlightOff, CurrencyRuble, RemoveCircle, AddCircle } from '@mui/icons-material';
import LazyLoad from 'react-lazyload';

import { removeCartPizza, minusCartPizza, addCartPizza } from '../../../store/cart/slice';
import { TCartObj } from '../../../store/cart/types';
import { useAppDispatch } from '../../../store';

const CartMobile: React.FC<TCartObj> = (item) => {
  const dispatch = useAppDispatch();
  return (
    <li className="cart__item d-flex flex-column">
      <div className="d-flex align-center justify-between">
        <div className="d-flex align-center">
          <LazyLoad height={100}>
            <img className="mr-15" src={item.img} alt={item.name} />
          </LazyLoad>
          <div className="cart__info">
            <h3 className="mb-5">{item.name}</h3>
            <p className="opacity-5">
              {item.type} тесто, {item.size} см.
            </p>
          </div>
        </div>
        <IconButton onClick={() => dispatch(removeCartPizza(item.uniqueId))} aria-label="delete">
          <HighlightOff fontSize="large" />
        </IconButton>
      </div>
      <div className="cart__mobile-border d-flex align-center justify-around">
        <h3 className="d-flex align-center">
          {item.price * item.count} <CurrencyRuble />
        </h3>
        <Stack direction="row" spacing={1} className="d-flex align-center">
          <IconButton
            onClick={() => dispatch(minusCartPizza(item.uniqueId))}
            aria-label="minus"
            disabled={item.count === 1}
            color="warning">
            <RemoveCircle fontSize="large" />
          </IconButton>
          <h2 className="pl-5 pr-5">{item.count}</h2>
          <IconButton
            onClick={() => dispatch(addCartPizza(item.uniqueId))}
            aria-label="plus"
            color="warning">
            <AddCircle fontSize="large" />
          </IconButton>
        </Stack>
      </div>
    </li>
  );
};

export default CartMobile;
