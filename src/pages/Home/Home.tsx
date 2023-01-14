import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { Helmet } from 'react-helmet';

import { useAppDispatch } from '../../store';
import { getPizzaThunk } from '../../store/pizza/slice';
import { getCategoryThunk } from '../../store/category/slice';
import { getSortThunk } from '../../store/sort/slice';

import { Pizza, Category, Sort, Pagination } from '../../components';
import { selectFilter } from '../../store/filter/selectors';

import pizzaLogo from '../../assets/pizza-logo.png';
import './home.scss';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const filterParams = useSelector(selectFilter);

  const navigate = useNavigate();
  const refQs = React.useRef(false);

  const { searchValue, categoryType, sort, pageCount } = filterParams;

  const pizzaLocation = qs.stringify({
    category: categoryType,
    sort: sort.sortName,
    type: sort.sortType,
    order: sort.sortOrder,
    page: pageCount,
  });
  const pizzaLocationNot = qs.stringify({
    sort: sort.sortName,
    type: sort.sortType,
    order: sort.sortOrder,
    page: pageCount,
  });

  React.useEffect(() => {
    const sortType = {
      sortName: sort.sortName,
      sortType: sort.sortType.replace('-', ''),
      sortOrder: sort.sortOrder,
    };
    dispatch(getPizzaThunk({ ...filterParams, sort: sortType }));
    if (refQs.current) {
      if (categoryType === 'all') {
        navigate(`?${pizzaLocationNot}`);
      } else {
        navigate(`?${pizzaLocation}`);
      }
    }
    refQs.current = true;
  }, [searchValue, categoryType, sort, pageCount]);
  React.useEffect(() => {
    dispatch(getCategoryThunk());
    dispatch(getSortThunk());
  }, []);
  return (
    <div className="home pb-30">
      <Helmet>
        <title>React Pizza</title>
        <link rel="icon" type="image/png" href={pizzaLogo} sizes="16x16" />
      </Helmet>
      <div className="d-flex justify-between align-center mb-15">
        <Category />
        <div className="home__sort">
          <Sort />
        </div>
      </div>
      <Pizza />
      <Pagination />
    </div>
  );
};

export default Home;
