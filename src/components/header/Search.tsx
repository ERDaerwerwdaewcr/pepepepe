import styles from './Search.module.scss'
import SearchIcon from '/src/assets/searchIcon.svg?react'
import Clear from '/src/assets/clear.svg?react'
import { useContext, useRef, useCallback, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import debounce from 'lodash.debounce'

export const Search = () => {
  const [value, setValue] = useState('')
  const { setSearchValue } = useContext(SearchContext)

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      setSearchValue(str)
    }, 1000),
    [],

  )

  const onChangeInput = event => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  const inputRef = useRef()
  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
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

