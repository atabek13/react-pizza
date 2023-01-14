import React from 'react';
import { useSelector } from 'react-redux';
import { Stack, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { dark, grey } from '../../@types/createTheme';
import { selectCategory } from '../../store/category/selectors';
import { selectFilter } from '../../store/filter/selectors';
import { useAppDispatch } from '../../store';

import CategorySkeleton from './CategorySkeleton';

import './category.scss';
import { setFilterCategory } from '../../store/filter/slice';

const Category: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const { category, status } = useSelector(selectCategory);
  const { categoryType } = useSelector(selectFilter);

  const onClickCategory = React.useCallback(
    (type: string) => dispatch(setFilterCategory(type)),
    [],
  );
  const categoryIsDesktop = category.map((item) => (
    <ThemeProvider theme={item.type === categoryType ? dark : grey} key={item.id}>
      <Button
        color="neutral"
        variant="contained"
        className="row__btn"
        onClick={() => onClickCategory(item.type)}>
        {item.name}
      </Button>
    </ThemeProvider>
  ));
  return (
    <div className="category">
      <div className="row">{status === 'loading' ? <CategorySkeleton /> : categoryIsDesktop}</div>
    </div>
  );
});
export default Category;
