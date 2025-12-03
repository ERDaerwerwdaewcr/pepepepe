
import styles from '../main.module.scss'
import { PizzaCard } from "../components/pizzaCard/PizzaCard"
import { FiltersAndSort } from "../components/filtersAndSort/FiltersAndSort"
import { useEffect, useContext, useCallback } from "react"
import { Skeleton } from "../components/pizzaCard/Skeleton"
import { Pagination } from '../components/Pagination/Pagination'
import { SearchContext } from '../context/SearchContext'
import { usePizzas } from '../hooks/usePizzas'

import { useAppDispatch, useAppSelector } from '../redux/store'
import { setFilterId, setPageCount } from '../redux/slices/filterSlice'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate();

  const filterId = useAppSelector((state) => state.filterSlice.filterId)
  const dispatch = useAppDispatch()
  const sortType = useAppSelector((state) => state.filterSlice.sort.sortProperty)
  const pageCount = useAppSelector((state) => state.filterSlice.pageCount);

  const onClickFilter = (id: number) => {
    dispatch(setFilterId(id))
  };

  const handleChangePage = useCallback((page: number) => {
    dispatch(setPageCount(page));
  }, [dispatch]);

  const {
    items,
    setItems,
    isLoading,
    setIsLoading,
    // filterId,
    // setFilterId,
    // sortType,
    // setSortType,
    // currentPage,
    // setCurrentPage
  } = usePizzas();

  const searchContext = useContext(SearchContext);
  const searchValue = searchContext?.searchValue ?? '';



  useEffect(() => {
    setIsLoading(true)
    const categoryParam = filterId === 0 ? '' : `category=${filterId}`;
    const sortBy = sortType.replace('-', '')
    const order = sortType.includes('-') ? 'asc' : 'desc'
    const search = searchValue ? `&search=${searchValue}` : ''

    axios.get(`https://690c81c7a6d92d83e84e0978.mockapi.io/api/v1/items?page=${pageCount}&limit=4&${categoryParam}&sortby=${sortBy}&order=${order}${search}`
    )
      .then(res => {
        setItems(res.data);
        setIsLoading(false)
      })

    window.scrollTo(0, 0);
  }, [filterId, sortType, searchValue, pageCount]);


  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", String(pageCount));
    params.set("sort", sortType);
    params.set("filter", String(filterId));
    if (searchValue) params.set("search", searchValue);

    const newQuery = params.toString();

    if (newQuery !== window.location.search.substring(1)) {
      navigate(`?${newQuery}`);
    }
  }, [filterId, sortType, searchValue, pageCount]);



  return (
    < div >
      <FiltersAndSort
        filterId={filterId}
        onClickFilter={onClickFilter}
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
              id={pizza.id}
            />
          ))}
      </div>
      <Pagination
        value={pageCount}
        onChangePage={handleChangePage}
      />
    </div>
  );
};

