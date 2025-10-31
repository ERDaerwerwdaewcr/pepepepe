import { Sort } from "./Sort";
import styles from './FilterdAndSort.module.scss'
import { Filter } from "./Filter";
import { useState } from "react";


const pizzaType = [
  { id: 1, type: 'Все' },
  { id: 2, type: 'Мясные' },
  { id: 3, type: 'Вегетарианские' },
  { id: 4, type: 'Гриль' },
  { id: 5, type: 'Острые' },
  { id: 6, type: 'Закрытые' },
]

export const FiltersAndSort = () => {
  const [activePizzaType, setActivePizzaType] = useState(1);

  return (
    <div className={styles.filterAndSort}>
      <div className={styles.filterBlock}>
        {pizzaType.map((pizza) => (
          <Filter
            key={pizza.id}
            id={pizza.id}
            type={pizza.type}
            activeId={activePizzaType}
            onClickType={setActivePizzaType}
          />
        ))}
      </div>
      <Sort />
    </div>
  );
};

