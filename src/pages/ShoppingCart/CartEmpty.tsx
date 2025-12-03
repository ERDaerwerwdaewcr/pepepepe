import styles from './CartEmpty.module.scss'
import { Link } from 'react-router-dom'


export const CartEmpty = () => {
  return (
    <div className={styles.container}>
      <h1>Корзина пустая 😕</h1>
      <p>Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      <img src="/public/empty-basket.png" alt="" />
      <Link to="/">
        <button >Вернуться назад</button>
      </Link>
    </div>
  );
};

