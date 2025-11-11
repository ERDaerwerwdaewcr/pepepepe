import styles from './CartEmpty.module.scss'

export const CartEmpty = () => {
  return (
    <div className={styles.container}>
      <h1>Корзина пустая 😕</h1>
      <p>Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      <img src="/public/empty-basket.png" alt="" />
      <button>Вернуться назад</button>
    </div>
  );
};

