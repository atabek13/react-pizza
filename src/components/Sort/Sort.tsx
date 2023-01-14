import React from 'react';
import { useSelector } from 'react-redux';
import { InputLabel, MenuItem, FormControl, Box } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { selectSort } from '../../store/sort/selectors';
import { selectFilter } from '../../store/filter/selectors';
import { useAppDispatch } from '../../store';
import { setFilterSort } from '../../store/filter/slice';
import SortSkeleton from './SortSkeleton';

import './sort.scss';

const Sort: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const { sort, status } = useSelector(selectSort);
  const { sort: sortObj } = useSelector(selectFilter);

  const handleChange = (event: SelectChangeEvent) => {
    const sortFind = sort.find((prev) => prev.name === event.target.value);
    if (sortFind) {
      dispatch(
        setFilterSort({
          sortName: sortFind.name,
          sortType: sortFind.type,
          sortOrder: sortFind.order,
        }),
      );
    }
  };
  return (
    <Box className="sort">
      {status === 'loading' ? (
        <SortSkeleton />
      ) : (
        <FormControl fullWidth variant="standard" sx={{ m: 2, margin: 0 }} color="warning">
          <InputLabel id="demo-simple-select-autowidth-label">Сортировка по</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={sortObj.sortName}
            label="Сортировка по"
            onChange={(event) => handleChange(event)}>
            {sort.map((item, i) => (
              <MenuItem key={i} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
});

export default Sort;
