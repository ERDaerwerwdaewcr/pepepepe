import styles from './PizzaCard.module.scss'
import { useState } from 'react';
import clsx from 'clsx';
import { addItem } from '../../redux/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
interface PizzaCardProps {
  count?: number;
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  types: string[];
  sizes: number[];
}

export const PizzaCard = ({ id, title, price, imageUrl, types, sizes }: PizzaCardProps) => {
  const [pizzaState, setPizzaState] = useState({
    count: 0,
    activeType: 0,
    activeSize: 0,
  })
  const uniqueId = `${id}_${pizzaState.activeType}_${pizzaState.activeSize}`;


  // const [pizzaCount, setPizzaCount] = useState(0)
  // const [activeType, setActiveType] = useState(0)
  // const [activeSize, setActiveSize] = useState(0)
  const dispatch = useAppDispatch()
  const onClickAdd = () => {
    const item = {
      id: uniqueId,
      title,
      price,
      imageUrl,
      type: pizzaState.activeType,
      size: pizzaState.activeSize,
      types,
      sizes,
    };
    dispatch(addItem(item))
  }
  const cartItem = useAppSelector((state) => {
    return state.cartSlice.items.find((obj) => obj.id === uniqueId)
  }

  );
  const addedCount = cartItem ? cartItem.count : 0



  return (
    <div  >
      <div className={styles.pizzaCard} >
        <img className={styles.pizza} src={imageUrl} alt="" />
        <h2 className={styles.name} >{title}</h2>
        <div className={styles.pizzaInfo}>
          <div className={styles.dough}>
            {types.map((type, index) => (
              <span
                key={index}
                onClick={() => setPizzaState((prev) => ({ ...prev, activeType: index }))}
                className={clsx({ [styles.active]: pizzaState.activeType === index })}
              >
                {type}
              </span>
            ))}
          </div>
          <div className={styles.size}>
            {sizes.map((size, index) => (
              <span key={index}
                onClick={() => setPizzaState((prev) => ({ ...prev, activeSize: index }))}
                className={clsx({ [styles.active]: pizzaState.activeSize === index })}
              >{size} см.</span>
            ))}
          </div>
        </div>
        <div className={styles.priceAdd}>
          <h1 className={styles.price}>от {price} ₽ </h1>
          <button onClick={onClickAdd} className={styles.add}>
            <span >+ Добавить    </span>
            <i> {addedCount}</i>

          </button>
        </div>
      </div>
    </div>
  );
};

