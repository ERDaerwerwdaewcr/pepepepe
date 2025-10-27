import styles from './PizzaCard.module.css'

interface PizzaCardProps {
  name: string;
  price: string;
  img: string;
}

export const PizzaCard = ({ name, price, img }: PizzaCardProps) => {

  return (
    <div >
      <div className={styles.pizzaCard} >
        <img className={styles.pizza} src={img} alt="" />
        <h2 className={styles.name} >{name}</h2>
        <div className={styles.pizzaInfo}>
          <div className={styles.dough}>
            <p>тонкое</p>
            <p>традиционное</p>
          </div >
          <div className={styles.size}>
            <p>26см.</p>
            <p>30см.</p>
            <p>40см.</p>
          </div>
        </div>
        <div className={styles.priceAdd}>
          <h1 className={styles.price}>{price}</h1>
          <p className={styles.add}>+ Добавить</p>
        </div>
      </div>
    </div>
  );
};

