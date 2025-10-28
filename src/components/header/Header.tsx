import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <img className={styles.pizza} src="/public/pizza-logo.svg" alt="тут иконка пиццы" />
        <div className={styles.headerText} >
          <h1 className={styles.name}>REACT PIZZA</h1>
          <p >самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className={styles.shoppingСart}>
        <p className={styles.price}>₽₽₽</p>
        <div className={styles.hr} />
        <div className={styles.cartInfo}>

          <img src="/public/cart.svg" alt="корзина" className={styles.name} />
          <p className={styles.cartText}>10</p>
        </div>
      </div>

    </div>


  );
};

