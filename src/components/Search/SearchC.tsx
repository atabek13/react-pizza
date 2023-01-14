import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { Search, Close } from '@mui/icons-material';
import { debounce } from 'lodash';

import { useAppDispatch } from '../../store';
import { selectFilter } from '../../store/filter/selectors';
import { setFilterSearch } from '../../store/filter/slice';

import './searchC.scss';

const SearchC: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = React.useState<string>('');

  const inputRef = React.useRef<HTMLInputElement>(null);

  const searchLodash = debounce((e) => {
    dispatch(setFilterSearch(e.target.value));
  }, 1000);

  const onChangeCategory = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    searchLodash(e);
  }, []);
  const clearInputValue = () => {
    dispatch(setFilterSearch(''));
    setInputValue('');
    inputRef.current?.focus();
  };
  return (
    <div className="search d-flex align-center">
      <Search className="mr-5" color="disabled" fontSize="medium" />
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => onChangeCategory(e)}
        placeholder="Поиск..."
      />
      {inputValue && (
        <Close onClick={clearInputValue} className="cu-p" color="disabled" fontSize="medium" />
      )}
    </div>
  );
});

export default SearchC;
