import styles from './PizzaCard.module.scss'
import { useState } from 'react';

interface PizzaCardProps {
  title: string;
  price: number;
  imageUrl: string;
  types: string[];
  sizes: number[];
}

export const PizzaCard = ({ title, price, imageUrl, types, sizes }: PizzaCardProps) => {
  const [pizzaCount, setPizzaCount] = useState(0)
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)

  const onClickAdd = () => {
    setPizzaCount(pizzaCount + 1)
  }

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
                onClick={() => setActiveType(index)}
                className={activeType === index ? styles.active : ''}
              >
                {type}
              </span>
            ))}
          </div>
          <div className={styles.size}>
            {sizes.map((size, index) => (
              <span key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? styles.active : ''}
              >{size} см.</span>
            ))}
          </div>
        </div>
        <div className={styles.priceAdd}>
          <h1 className={styles.price}>от {price} ₽ </h1>
          <button onClick={onClickAdd} className={styles.add}>
            <span >+ Добавить    </span>
            <i> {pizzaCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

