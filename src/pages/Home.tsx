import styles from '../main.module.scss'
import { PizzaCard } from "../components/pizzaCard/PizzaCard"
import { FiltersAndSort } from "../components/filtersAndSort/FiltersAndSort"
import { useEffect, useCallback } from "react"
import { Skeleton } from "../components/pizzaCard/Skeleton"
import { Pagination } from '../components/Pagination/Pagination'

import { useAppDispatch, useAppSelector } from '../redux/store'
import { setFilterId, setPageCount } from '../redux/slices/filterSlice'

import { useGetPizzasQuery } from '../redux/slices/pizzaApi'
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const filterId = useAppSelector((state) => state.filterSlice.filterId);
  const sortType = useAppSelector((state) => state.filterSlice.sort.sortProperty);
  const pageCount = useAppSelector((state) => state.filterSlice.pageCount);
  const searchValue = useAppSelector((state) => state.filterSlice.searchValue);

  const { data, error, isLoading, isFetching } = useGetPizzasQuery({
    page: pageCount,
    limit: 4,
    category: filterId,
    sortBy: sortType.replace('-', ''),
    search: searchValue
  });

  const onClickFilter = useCallback((id: number) => {
    dispatch(setFilterId(id));
  }, []);

  const handleChangePage = useCallback((page: number) => {
    dispatch(setPageCount(page));
  }, [dispatch]);

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
  }, [filterId, sortType, searchValue, pageCount, navigate]);


  return (
    <div>
      <FiltersAndSort
        filterId={filterId}
        onClickFilter={onClickFilter}
      />

      <h1 className={styles.title}>Все пиццы</h1>

      <div className={styles.pizzaList}>

        {isLoading || isFetching ? (
          [...Array(6)].map((_, index) => <Skeleton key={index} />)
        ) : error ? (
          <h2 style={{ color: 'red' }}>Ошибка загрузки данных</h2>
        ) : (
          data?.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              {...pizza}
            />
          ))
        )}

      </div>

      <Pagination
        value={pageCount}
        onChangePage={handleChangePage}
      />
    </div>
  );
};
