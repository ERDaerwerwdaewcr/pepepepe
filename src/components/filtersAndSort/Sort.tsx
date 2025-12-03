import styles from './Sort.module.scss'
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '../../redux/slices/filterSlice';

import { SortList } from './SortOptions'

interface SortType {
  name: string;
  sortProperty: string;
}

export const Sort = () => {
  const sortRef = useRef()
  const dispatch = useDispatch()
  const sort = useSelector((state: any) => state.filterSlice.sort)

  const [open, setOpen] = useState(false)
  // const [selected, setSelected] = useState(0)


  const onClickListItem = (obj: SortType) => {
    dispatch(setSort(obj))
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
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
            {SortList.map((obj: SortType, i: number) => (
              <p key={i} onClick={() => onClickListItem(obj)} className={clsx({ [styles.sortListActive]: sort.sortProperty === obj.sortProperty })}>{obj.name}</p>

            ))}


          </div>
        )}
      </div>

    </div>
  );
};

