import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { Search } from './Search'
import { useAppSelector } from '../../redux/store';
import { useEffect, useRef } from 'react';


export const Header = () => {

  const { items, totalPrice } = useAppSelector((state) => state.cartSlice)
  const totalCount = items.reduce((sum: number, item) => sum + item.count, 0)
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      localStorage.setItem('cart', json)
    }
    isMounted.current = true
  }, [items])

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to="/" >
          <img className={styles.pizza} src="/public/pizza-logo.svg" alt="тут иконка пиццы" />

          <div className={styles.headerText} >
            <h1 className={styles.name}>REACT PIZZA</h1>
            <p >самая вкусная пицца во вселенной</p>
          </div>
        </Link>
      </div>
      <Search />
      <div className={styles.shoppingСart}>
        <Link to="/cart" >
          <p className={styles.price}>{totalPrice}</p>
          <div className={styles.hr} />
          <div className={styles.cartInfo}>

            <img src="/public/cart.svg" alt="корзина" className={styles.name} />
            <span className={styles.cartText}>{totalCount}</span>
          </div>
        </Link>
      </div>

    </div >


  );
};

