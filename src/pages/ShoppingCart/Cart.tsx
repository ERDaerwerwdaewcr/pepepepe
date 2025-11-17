import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import CartIcon from '../../assets/cartIcon.svg?react';
export const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.head}>
          <CartIcon className={styles.basket} />
          <h1>Корзина</h1>
        </div>
        <div className={styles.trash}>
          <img className={styles.trashBox} src="/public/trash.svg" alt="" />
          <p>Очистить корзину</p>
        </div>
      </div>
      <div>
        <div className={styles.line}></div>
        <div className={styles.pizzaItem}>
          <div className={styles.pizzaType}>
            <img className={styles.pizza} src="https://media.dodostatic.net/image/r:1875x1875/0198bf2cc87a79baa946c53b634615f4.avif" alt="" />
            <div className={styles.pizzaInfo} >
              <h2>Цыпленок барбекю</h2>
              <p>тонкое тесто, 26см</p>
            </div>
          </div>
          <div className={styles.pizzaNum}>
            <img src="/public/min.png" alt="" />
            <h2>2</h2>
            <img src="/public/plus.png" alt="" />
          </div>
          <h2 className={styles.pizzaPrice} >770 ₽ </h2>
          <img className={styles.delete} src="/public/delete.png" alt="" />
        </div>
      </div>
      <div className={styles.orderInfo}>
        <div className={styles.pizzaAll} >
          <p>Всего пицц: </p>
          <h3>3шт.</h3>
        </div>
        <div className={styles.order}>
          <p> Сумма заказа: </p>
          <h3>900 ₽</h3>
        </div>
      </div>
      <div className={styles.end}>
        <Link to="/" >
          <span className={styles.back}> Вернуться назад </span>
        </Link>
        <span className={styles.pay}>Оплатить заказ</span>
      </div>
    </div>
  );
};

