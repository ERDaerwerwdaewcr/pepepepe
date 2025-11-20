import styles from '../main.module.scss'
import { PizzaCard } from "../components/pizzaCard/PizzaCard"
import { FiltersAndSort } from "../components/filtersAndSort/FiltersAndSort"
import { useEffect, useContext } from "react"
import { Skeleton } from "../components/pizzaCard/Skeleton"
import { Pagination } from '../components/Pagination/Pagination'
import { SearchContext } from '../context/SearchContext'
import { usePizzas } from '../hooks/usePizzas'


export const Home = () => {

  const {
    items,
    setItems,
    isLoading,
    setIsLoading,
    filterId,
    setFilterId,
    sortType,
    setSortType,
    currentPage,
    setCurrentPage
  } = usePizzas();

  const searchContext = useContext(SearchContext);
  const searchValue = searchContext?.searchValue ?? '';



  useEffect(() => {
    setIsLoading(true)
    const categoryParam = filterId === 0 ? '' : `category=${filterId}`;
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const search = searchValue ? `&search=${searchValue}` : ''

    const linkPizza = 'https://690c81c7a6d92d83e84e0978.mockapi.io/api/v1/'
    fetch(`${linkPizza}items?page=${currentPage}&limit=4&${categoryParam}&sortby=${sortBy}&order=${order}${search}`).then((res) => {
      if (!res.ok) {

        return [];
      }
      return res.json();
    })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      })
      .catch(() => {
        // На всякий случай
        setItems([]);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [filterId, sortType, searchValue, currentPage]);

  return (
    < div >
      <FiltersAndSort
        filterId={filterId}
        onClickFilter={(i: number) => setFilterId(i)}
        sortType={sortType}
        onClickSort={(obj) => setSortType(obj)}
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
      <Pagination onChangePage={(page: number) => setCurrentPage(page)} />
    </div>
  );
};

