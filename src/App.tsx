import { Header } from "./components/header/Header"
import styles from './main.module.css'
import { PizzaCard } from "./components/pizzaCard/PizzaCard"
import { FiltersAndSort } from "./components/filtersAndSort/FiltersAndSort"

const pizzas = [
  { id: 1, name: 'Чизбургер-пицца', price: 'от 395 ₽', img: "/public/chisburger.png" },
  { id: 2, name: 'Сырная', price: 'от 450 ₽', img: "/public/cheese.png" },
  { id: 3, name: 'Креветки по-азиатски', price: 'от 290 ₽', img: "/public/asia.png" },
  { id: 4, name: 'Сырный цыпленок', price: 'от 385 ₽', img: "/public/chiken.png" },
  { id: 5, name: 'Чизбургер-пицца', price: 'от 395 ₽', img: "/public/chisburger.png" },
  { id: 6, name: 'Сырная', price: 'от 450 ₽', img: "/public/cheese.png" },
  { id: 7, name: 'Креветки по-азиатски', price: 'от 290 ₽', img: "/public/asia.png" },
  { id: 8, name: 'Сырный цыпленок', price: 'от 385 ₽', img: "/public/chiken.png" },
]



function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <FiltersAndSort />
        <h1 className={styles.title}>Все пиццы</h1>
        <div className={styles.pizzaList}>
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              img={pizza.img}
            />
          ))}
        </div>
      </div>

    </>
  )
}

export default App
