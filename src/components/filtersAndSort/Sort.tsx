import styles from './Sort.module.scss'
import { useState } from 'react';
import clsx from 'clsx';





export const Sort = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  const list = ['популярности', "цене", "алфавиту"]

  const onClickListItem = (i) => {
    setSelected(i)
    setOpen(false)
  }

  return (
    <div className={styles.sort}>
      <img className={styles.triangle} src="/public/triangle.svg" alt="" />
      <p className={styles.sortText}>Cортировка по </p>
      <div className={styles.sortColumn}>
        <span onClick={() => setOpen(!open)} className={styles.sortType}>{list[selected]}</span>
        {open && (
          <div className={styles.sortList}>
            {list.map((name: string, i: number) => (
              <p key={i} onClick={() => onClickListItem(i)} className={clsx({ [styles.sortListActive]: selected === i })}>{name}</p>

            ))}


          </div>
        )}
      </div>

    </div>
  );
};

