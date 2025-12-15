import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import CartIcon from '../../assets/cartIcon.svg?react';
import { CartItem } from './CartItem';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { clearItems } from '../../redux/slices/cartSlice';
import { CartEmpty } from './CartEmpty';



export const Cart = () => {
  const dispatch = useAppDispatch()
  const { items, totalPrice } = useAppSelector((state) => state.cartSlice)
  const totalCount = items.reduce((sum: number, item) => sum + item.count, 0)
  const onClickClear = () => {
    if (confirm('Удалить все товары из корзины?')) {
      dispatch(clearItems())
    }
  }

  if (!totalPrice) {
    return <CartEmpty />
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.head}>
          <CartIcon className={styles.basket} />
          <h1>Корзина</h1>
        </div>
        <div onClick={onClickClear} className={styles.trash}>
          <img className={styles.trashBox} src="/public/trash.svg" alt="" />
          <p>Очистить корзину</p>
        </div>
      </div>
      <div>
        <div className={styles.line} />
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.orderInfo}>
        <div className={styles.pizzaAll} >
          <p>Всего пицц: </p>
          <h3>{totalCount} шт.</h3>
        </div>
        <div className={styles.order}>
          <p> Сумма заказа: </p>
          <h3>{totalPrice} ₽</h3>
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

