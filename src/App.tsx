import { Header } from "./components/header/Header"
import styles from './main.module.scss'
import { PizzaCard } from "./components/pizzaCard/PizzaCard"
import { FiltersAndSort } from "./components/filtersAndSort/FiltersAndSort"

import { useEffect, useState } from "react"
import { Skeleton } from "./components/pizzaCard/Skeleton"
interface Pizza {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  types: string[];
  sizes: number[];
}

function App() {

  const [items, setItems] = useState<Pizza[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://690c81c7a6d92d83e84e0978.mockapi.io/api/v1/items')
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className={styles.app}>
        <Header />
        <FiltersAndSort />
        <h1 className={styles.title}>Все пиццы</h1>
        <div className={styles.pizzaList}>
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((pizza) => (
              <PizzaCard
                key={pizza.id}
                title={pizza.title}
                price={pizza.price}
                imageUrl={pizza.imageUrl}
                types={pizza.types}
                sizes={pizza.sizes}
              />
            ))}
        </div>
      </div>

    </>
  )
}

export default App
