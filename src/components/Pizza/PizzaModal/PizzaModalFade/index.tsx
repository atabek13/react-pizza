import React from 'react';
import { useSelector } from 'react-redux';
import { Fade, IconButton, Stack, Button } from '@mui/material';
import { Cancel } from '@mui/icons-material';
import clsx from 'clsx';

import { selectModal } from '../../../../store/modal/selectors';
import { useAppDispatch } from '../../../../store';
import { toast } from 'react-toastify';
import { setCartPizza } from '../../../../store/cart/slice';

import pizzaLoading from '../../../../assets/img/pizza-loading.svg';
import { TPizzaModalFide } from './types';

const PizzaModalFade: React.FC<TPizzaModalFide> = ({ handleClose }) => {
  const dispatch = useAppDispatch();
  const { modalPizzas, modalId, modalStatus } = useSelector(selectModal);
  const [indexSize, setIndexSize] = React.useState(1);
  const [indexType, setIndexType] = React.useState(0);
  const handelIndexSize = (i: number) => {
    setIndexSize(i);
    setIndexType(0);
  };
  const handleIndexType = (i: number) => {
    setIndexType(i);
  };
  const modalPostPizza = () => {
    if (modalPizzas) {
      const newPizzaObj = {
        id: modalId,
        uniqueId: Date.now(),
        img: modalPizzas.imageUrl,
        name: modalPizzas.name,
        size: modalPizzas.sizes[indexSize].size,
        type: modalPizzas.sizes[indexSize].type[indexType].typeName,
        price: modalPizzas.sizes[indexSize].price,
        count: 1,
      };
      toast.success(`Добавлено: ${modalPizzas.name}, ${modalPizzas.sizes[indexSize].size} см`, {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(setCartPizza(newPizzaObj));
      handleClose();
    }
  };
  return (
    <div className="pizza-modal__body">
      {modalPizzas && (
        <div className="pizza-modal__body-relative d-flex">
          <IconButton
            onClick={handleClose}
            aria-label="cancel"
            className="pizza-modal__body-cancel">
            <Cancel />
          </IconButton>
          <div className="pizza-modal__body-img d-flex align-center justify-center">
            <div className="pizza-modal__body-inner d-flex justify-center align-center">
              <img
                className={clsx(
                  'pizza-modal__img',
                  indexSize === 0 && 'pizza-modal__img-medium',
                  indexSize === 1 && 'pizza-modal__img-small',
                  indexSize === 2 && 'pizza-modal__img-big',
                )}
                src={modalStatus === 'loading' ? pizzaLoading : modalPizzas.imageUrl}
                alt={modalPizzas.name}
              />
            </div>
          </div>
          <div className="pizza-modal__body-info">
            <h2>{modalPizzas.name}</h2>
            <p className="opacity-6">
              {modalPizzas.sizes[indexSize].size} см,{' '}
              {modalPizzas.sizes[indexSize].type[indexType].typeName} тесто
            </p>
            <p className="opacity-6">{modalPizzas.desc}</p>
            <div className="flex">
              <div className="pizza-modal__body-category">
                <Stack direction="row">
                  {modalPizzas.sizes.map((prev, i) => (
                    <Button
                      key={prev.id}
                      className="flex"
                      onClick={() => handelIndexSize(i)}
                      variant={indexSize === i ? 'contained' : 'text'}
                      color="warning">
                      {prev.size}
                    </Button>
                  ))}
                </Stack>
                <Stack direction="row">
                  {modalPizzas.sizes[indexSize].type.map((prev, i) => (
                    <Button
                      key={prev.id}
                      className="flex"
                      onClick={() => handleIndexType(i)}
                      disabled={!prev.isShow}
                      variant={indexType === i ? 'contained' : 'text'}
                      color="warning">
                      {prev.typeName}
                    </Button>
                  ))}
                </Stack>
              </div>
            </div>
            <Button onClick={modalPostPizza} variant="contained" color="warning">
              Добавить в корзину за {modalPizzas.sizes[indexSize].price} ₽
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default PizzaModalFade;
