import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './Cart.module.scss'


interface CartItemProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: number;
  count: number;
  types: number[];
  sizes: number[];
}
export const CartItem = ({
  id,
  title,
  price,
  imageUrl,
  type,
  size,
  count,
  types,
  sizes
}: CartItemProps) => {
  const dispatch = useAppDispatch()
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    )
  }
  const onClickMinus = () => {
    dispatch(
      minusItem(id)
    )
  }
  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  return (
    <div className={styles.pizzaItem}>
      <div className={styles.pizzaType}>
        <img className={styles.pizza} src={imageUrl} alt="" />
        <div className={styles.pizzaInfo} >
          <h2>{title}</h2>
          <p>{types[type]}, {sizes[size]} см</p>
        </div>
      </div>
      <div
        className={styles.pizzaNum}>
        <button
          onClick={onClickMinus}
          disabled={count === 1}
          className={styles.iconBtn}
        >
          <img src="/public/min.png" alt="minus" />
        </button>
        <h2>{count}</h2>
        <button onClick={onClickPlus} className={styles.iconBtn}>
          <img src="/public/plus.png" alt="plus" />
        </button>
      </div>
      <h2 className={styles.pizzaPrice} >{price * count} </h2>
      <img onClick={onClickRemove} className={styles.delete} src="/public/delete.png" alt="" />
    </div>
  );
};

