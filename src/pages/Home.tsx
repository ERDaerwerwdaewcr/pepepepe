import styles from '../main.module.scss'
import { PizzaCard } from "../components/pizzaCard/PizzaCard"
import { FiltersAndSort } from "../components/filtersAndSort/FiltersAndSort"
import { useEffect, useState } from "react"
import { Skeleton } from "../components/pizzaCard/Skeleton"

interface SortType {
  name: string;
  sortProperty: string;
}
interface Pizza {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  types: string[];
  sizes: number[];
}
export const Home = () => {

  const [items, setItems] = useState<Pizza[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filterId, setFilterId] = useState<number>(0)
  const [sortType, setSortType] = useState<SortType>({
    name: 'популярности',
    sortProperty: 'rating',
  })


  useEffect(() => {
    setIsLoading(true)
    const categoryParam = filterId === 0 ? '' : `category=${filterId}`;
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    fetch(`https://690c81c7a6d92d83e84e0978.mockapi.io/api/v1/items?${categoryParam}&sortby=${sortBy}&order=${order}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)

      })
    window.scrollTo(0, 0)
  }, [filterId, sortType])

  return (
    < div >
      <FiltersAndSort
        filterId={filterId}
        onClickFilter={(i: number) => setFilterId(i)}
        sortType={sortType}
        onClickSort={(i: number) => setSortType(i)}
      />
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
  );
};

