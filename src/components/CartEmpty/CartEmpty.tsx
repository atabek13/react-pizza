import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import cartEmpty from '../../assets/img/empty-cart.png';

import './cart-empty.scss';

const CartEmpty: React.FC<Record<string, string>> = ({ title, keyTitleOne, keyTitleTwo }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-empty text-center d-flex flex-column align-center">
      <h2>
        {title} <span>😕</span>
      </h2>
      <p className="d-flex flex-column">
        Вероятней всего, вы не {keyTitleOne} ещё пиццу. Для того, чтобы {keyTitleTwo} пиццу, перейди
        на главную страницу.
      </p>
      <img src={cartEmpty} alt="Empty cart" />
      <Button
        className="cart-empty__btn"
        size="large"
        onClick={() => navigate('/')}
        color="warning"
        variant="contained">
        Вернуться назад
      </Button>
    </div>
  );
};

export default CartEmpty;
