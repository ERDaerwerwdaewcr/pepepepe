import styles from './Sort.module.scss'
import { useState } from 'react';
import clsx from 'clsx';


interface SortType {
  name: string;
  sortProperty: string;
}

interface SortProps {
  sortType: SortType;
  onClickSort: (sort: SortType) => void;
}

const list: SortType[] = [
  { name: "популярности (возрастание)", sortProperty: '-rating' },
  { name: "популярности (убывание)", sortProperty: 'rating' },
  { name: "цене (возрастание)", sortProperty: '-price' },
  { name: "цене (убывание)", sortProperty: 'price' },
  { name: "алфавиту (возрастание)", sortProperty: '-title' },
  { name: "алфавиту (убывание)", sortProperty: 'title' },
]

export const Sort: React.FC<SortProps> = ({ sortType, onClickSort }) => {
  const [open, setOpen] = useState(false)
  // const [selected, setSelected] = useState(0)


  const onClickListItem = (obj: SortType) => {
    onClickSort(obj)
    setOpen(false)
  }

  return (
    <div className={styles.sort}>
      <img className={styles.triangle} src="/public/triangle.svg" alt="" />
      <p className={styles.sortText}>Cортировка по </p>
      <div className={styles.sortColumn}>
        <span onClick={() => setOpen(!open)} className={styles.sortType}>{sortType.name}</span>
        {open && (
          <div className={styles.sortList}>
            {list.map((obj: SortType, i: number) => (
              <p key={i} onClick={() => onClickListItem(obj)} className={clsx({ [styles.sortListActive]: sortType.sortProperty === obj.sortProperty })}>{obj.name}</p>

            ))}


          </div>
        )}
      </div>

    </div>
  );
};

