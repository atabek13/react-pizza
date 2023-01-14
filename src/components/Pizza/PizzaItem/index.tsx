import React from 'react';
import { useSelector } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import {
  FavoriteBorder,
  CurrencyRuble,
  Favorite,
  LocalShippingOutlined,
  AddBox,
} from '@mui/icons-material';

import { useAppDispatch } from '../../../store';
import { removeFavorite, setAddFavorite } from '../../../store/favorite/slice';
import { getModalId, setModalShow } from '../../../store/modal/slice';
import { selectFavorite } from '../../../store/favorite/selectors';
import { selectPizza } from '../../../store/pizza/selectors';
import { TPizzaObj } from '../../../store/pizza/types';

import pizzaLoading from '../../../assets/img/pizza-loading.svg';
import './pizza-item.scss';

const PizzaItem: React.FC<TPizzaObj> = (pizza) => {
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectFavorite);
  const { status } = useSelector(selectPizza);

  const { id, imageUrl, name, price, delivery } = pizza;
  const activeFav = items.find((prev) => prev.id === id);
  const [activeHeart, setActiveHeart] = React.useState(Boolean(activeFav?.id));

  const onClickHeart = () => {
    if (activeFav) {
      setActiveHeart(false);
      dispatch(removeFavorite(id));
    } else {
      setActiveHeart(true);
      dispatch(setAddFavorite(pizza));
    }
  };
  const setModalId = () => {
    dispatch(getModalId(id));
    dispatch(setModalShow(true));
  };
  return (
    <div className="pizza-item text-center cu-p">
      <img src={status === 'loading' ? pizzaLoading : imageUrl} alt={name} />
      <h2 className="mb-15">{name}</h2>
      <div className="d-flex align-center justify-around pb-10">
        <span className="pizza-item__bottom d-flex align-center">
          <h3>{price}</h3>
          <CurrencyRuble />
        </span>
        <Button
          onClick={setModalId}
          className="pizza-item__btn d-flex align-center"
          color="warning"
          size="large"
          variant="outlined">
          <span className="mr-10">Выбрать</span> <AddBox />
        </Button>
      </div>
      {delivery && (
        <div className="pizza-item__delivery d-flex justify-center align-center">
          <LocalShippingOutlined fontSize="large" />
        </div>
      )}
      <div onClick={onClickHeart} className="pizza-item__heart">
        {activeHeart ? (
          <IconButton color="error" aria-label="cart">
            <Favorite color="error" fontSize="large" />
          </IconButton>
        ) : (
          <IconButton color="error" aria-label="cart">
            <FavoriteBorder color="error" fontSize="large" />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default PizzaItem;
