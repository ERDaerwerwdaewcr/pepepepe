import styles from './Filter.module.css'
import { Sort } from './Sort';

export const Filter = () => {
  return (
    <div className={styles.filterAndSort}>
      <div className={styles.filter}>
        <p className={styles.filterText}>Все</p>
        <p className={styles.filterText}>Мясные</p>
        <p className={styles.filterText}>Вегетарианские</p>
        <p className={styles.filterText}>Гриль</p>
        <p className={styles.filterText}>Острые</p>
        <p className={styles.filterText}>Закрытые</p>

      </div>
      <Sort />
    </div>
  );
};

