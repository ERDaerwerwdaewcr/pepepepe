import styles from './Search.module.scss'
import SearchIcon from '/src/assets/searchIcon.svg?react'
import Clear from '/src/assets/clear.svg?react'
import { useRef, useCallback, useState } from 'react';
// import { SearchContext } from '../../context/SearchContext';
import { debounce } from '../../utils/debounce';
import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/slices/filterSlice';

export const Search = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('')
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [dispatch]
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  const inputRef = useRef<HTMLInputElement>(null)
  const onClickClear = () => {
    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current?.focus()
  }
  return (
    <div className={styles.root}>
      <SearchIcon className={styles.icon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.item}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <Clear
          onClick={onClickClear}
          className={styles.clear}
        />
      )}
    </div>
  );
};

