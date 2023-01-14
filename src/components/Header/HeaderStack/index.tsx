import React from 'react';
import { ShoppingCart, Bookmark } from '@mui/icons-material';
import { Stack, IconButton, Badge, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectFavorite } from '../../../store/favorite/selectors';
import { TNav } from './types';
import { selectCart } from '../../../store/cart/selectors';

const HeaderStack: React.FC<TNav> = ({ navbar }) => {
  const navigate = useNavigate();
  const styleNav = navbar ? '#fff' : '#212121';
  const { items } = useSelector(selectFavorite);
  const { cartPizzas, totalCount } = useSelector(selectCart);

  const jsonRef = React.useRef(false);

  React.useEffect(() => {
    if (jsonRef.current) {
      localStorage.setItem('cart', JSON.stringify(cartPizzas));
    }
    jsonRef.current = true;
  }, [cartPizzas]);

  return (
    <Stack spacing={1} direction="row" sx={{ color: 'action.active' }}>
      <Tooltip title="Корзина">
        <IconButton aria-label="cart" onClick={() => navigate('/cart')}>
          <Badge color="warning" badgeContent={totalCount} showZero={Boolean(totalCount)}>
            <ShoppingCart style={{ color: `${styleNav}` }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Закладка">
        <IconButton aria-label="cart" onClick={() => navigate('/favorite')}>
          <Badge color="warning" badgeContent={items.length} showZero={Boolean(items.length)}>
            <Bookmark style={{ color: `${styleNav}` }} />
          </Badge>
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default HeaderStack;
