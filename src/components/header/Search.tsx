import styles from './Search.module.scss'
import SearchIcon from '/src/assets/searchIcon.svg?react'
import Clear from '/src/assets/clear.svg?react'
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <div className={styles.root}>
      <SearchIcon className={styles.icon} />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.item}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <Clear
          onClick={() => setSearchValue('')}
          className={styles.clear}
        />
      )}
    </div>
  );
};

