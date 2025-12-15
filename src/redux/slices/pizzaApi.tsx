import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PizzaItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: string[];
}

export interface PizzaQueryParams {
  page: number;
  limit: number;
  category: number;
  sortBy: string;
  search: string;
}

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://690c81c7a6d92d83e84e0978.mockapi.io/api/v1/',
  }),

  endpoints: (builder) => ({
    getPizzas: builder.query<PizzaItem[], PizzaQueryParams>({
      query: ({ page, limit, category, sortBy, search }) => {

        return `items?page=${page}&limit=${limit}${category > 0 ? `&category=${category}` : ""
          }&sortby=${sortBy}&order=desc${search ? `&search=${search}` : ""
          }`;
      },
    }),
  }),
});

export const { useGetPizzasQuery } = pizzaApi;

