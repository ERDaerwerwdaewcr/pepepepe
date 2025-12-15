import styles from './Sort.module.scss'
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { setSort } from '../../redux/slices/filterSlice';

import { SortList } from './SortOptions'
import { useAppDispatch, useAppSelector } from '../../redux/store';

interface SortType {
  name: string;
  sortProperty: string;
}

export const Sort = () => {
  const sortRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const sort = useAppSelector((state) => state.filterSlice.sort)

  const [open, setOpen] = useState(false)


  const onClickListItem = (sortlist: SortType) => {
    dispatch(setSort(sortlist))
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortRef.current &&
        !event.composedPath().includes(sortRef.current)
      ) {
        setOpen(false)
      }
    }
    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={sortRef} className={styles.sort}>
      <img className={styles.triangle} src="/public/triangle.svg" alt="" />
      <p className={styles.sortText}>Cортировка по </p>
      <div className={styles.sortColumn}>
        <span onClick={() => setOpen(!open)} className={styles.sortType}>{sort.name}</span>
        {open && (
          <div className={styles.sortList}>
            {SortList.map((sortlist: SortType, name: number) => (
              <p key={name} onClick={() => onClickListItem(sortlist)} className={clsx({ [styles.sortListActive]: sort.sortProperty === sortlist.sortProperty })}>{sortlist.name}</p>

            ))}


          </div>
        )}
      </div>

    </div>
  );
};

