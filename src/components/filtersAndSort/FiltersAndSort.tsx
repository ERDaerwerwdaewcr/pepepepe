import { Sort } from "./Sort";
import styles from './FilterdAndSort.module.scss'
import { Filter } from "./Filter";

interface SortType {
  name: string;
  sortProperty: string;
}

interface FiltersAndSortProps {
  filterId: number;
  onClickFilter: (id: number) => void;
  sortType: SortType;
  onClickSort: (sort: SortType) => void;
}
const pizzaType = [
  { id: 0, type: 'Все' },
  { id: 1, type: 'Мясные' },
  { id: 2, type: 'Вегетарианские' },
  { id: 3, type: 'Гриль' },
  { id: 4, type: 'Острые' },
  { id: 5, type: 'Закрытые' },
]

export const FiltersAndSort: React.FC<FiltersAndSortProps> = ({
  filterId,
  onClickFilter,
  sortType,
  onClickSort,
}) => {
  return (
    <div className={styles.filterAndSort}>
      <div className={styles.filterBlock}>
        {pizzaType.map((pizza) => (
          <Filter
            key={pizza.id}
            id={pizza.id}
            type={pizza.type}
            filterId={filterId}
            onClickType={onClickFilter}
          />
        ))}
      </div>
      <Sort
        sortType={sortType}
        onClickSort={onClickSort}
      />
    </div>
  );
};

