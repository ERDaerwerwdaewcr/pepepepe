import { Sort } from "./Sort";
import styles from './FilterdAndSort.module.css'
import { Filter } from "./Filter";

const pizzaType = [
  { id: 1, type: 'Все' },
  { id: 2, type: 'Мясные' },
  { id: 3, type: 'Вегетарианские' },
  { id: 4, type: 'Гриль' },
  { id: 5, type: 'Острые' },
  { id: 6, type: 'Закрытые' },
]

export const FiltersAndSort = () => {
  return (
    <div className={styles.filterAndSort}>
      <div className={styles.filterBlock}>
        {pizzaType.map((pizza) => (
          <Filter
            key={pizza.id}
            type={pizza.type}
          />
        ))}
      </div>
      <Sort />
    </div>
  );
};

