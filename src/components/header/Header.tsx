import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { Search } from './Search'


export const Header = () => {

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
          <p className={styles.price}>₽₽₽</p>
          <div className={styles.hr} />
          <div className={styles.cartInfo}>

            <img src="/public/cart.svg" alt="корзина" className={styles.name} />
            <p className={styles.cartText}>10</p>
          </div>
        </Link>
      </div>

    </div >


  );
};

