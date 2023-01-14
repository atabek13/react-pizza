import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, useMediaQuery } from "@mui/material";
import {
  ShoppingCartOutlined,
  DeleteSweepOutlined,
  ChevronLeft,
} from "@mui/icons-material";

import { CartEmpty, DialogComponent } from "../../components";
import { selectCart } from "../../store/cart/selectors";
import { useAppDispatch } from "../../store";
import { clearCartPizza } from "../../store/cart/slice";

import CartMobile from "./CartMobile";
import CartDesktop from "./CartDesktop";

import "./cart.scss";

const Cart: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { cartPizzas, totalCount, totalPrice } = useSelector(selectCart);

  const [dialogShow, setDialogShow] = React.useState(false);

  const cartMobileShow = useMediaQuery("(max-width: 680px)");

  const onClearCart = () => {
    dispatch(clearCartPizza());
    setDialogShow(false);
  };
  const onCloseDialog = () => {
    setDialogShow(false);
  };

  return (
    <div>
      <DialogComponent
        dialogShow={dialogShow}
        onClear={onClearCart}
        onCloseDialog={onCloseDialog}
        dialogTitle="Корзина"
        dialogContent="Вы дейтвительно хотите очистить корзину?"
      />
      <>
        {cartPizzas.length > 0 ? (
          <div className="cart d-flex flex-column">
            <div className="d-flex justify-between align-center mb-30">
              <h1 className="d-flex align-center">
                <ShoppingCartOutlined /> Корзина
              </h1>
              <Button
                onClick={() => setDialogShow(true)}
                color="warning"
                startIcon={<DeleteSweepOutlined />}
              >
                Очистить корзину
              </Button>
            </div>
            <ul className="cart__items mb-30 flex">
              {cartPizzas.map((item) =>
                cartMobileShow ? (
                  <CartMobile key={item.uniqueId} {...item} />
                ) : (
                  <CartDesktop key={item.uniqueId} {...item} />
                )
              )}
            </ul>
            <div className="d-flex align-center justify-between mb-15">
              <p className="cart__full">
                Всего пицц: <b>{totalCount} шт.</b>
              </p>
              <p className="cart__full">
                Сумма заказа:{" "}
                <b className="cart__full-orange">{totalPrice} ₽</b>
              </p>
            </div>
            <div className="d-flex align-center justify-between mb-30">
              <Button
                onClick={() => navigate("/")}
                color="success"
                variant="outlined"
                startIcon={<ChevronLeft />}
              >
                Вернуться назад
              </Button>
              <Button color="warning" variant="contained">
                Оплатить сейчас
              </Button>
            </div>
          </div>
        ) : (
          <CartEmpty
            title="Корзина пустая"
            keyTitleOne="заказывали"
            keyTitleTwo="заказать"
          />
        )}
      </>
    </div>
  );
};

export default Cart;
