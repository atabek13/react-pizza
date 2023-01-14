import React from 'react';
import { Pagination } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { setFilterPageCount } from '../../store/filter/slice';
import { selectFilter } from '../../store/filter/selectors';

import './pagination.scss';

const Paginaton: React.FC = () => {
  const dispatch = useDispatch();
  const { pageCount } = useSelector(selectFilter);
  return (
    <div className="pagination">
      <Pagination
        count={3}
        page={pageCount}
        onChange={(_, page: number) => dispatch(setFilterPageCount(page))}
        color="primary"
      />
    </div>
  );
};

export default Paginaton;
