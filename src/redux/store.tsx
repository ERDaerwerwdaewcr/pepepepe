import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import cartSlice from './slices/cartSlice'
import pizzasSlice from './slices/pizzasSlice'
import { pizzaApi } from './slices/pizzaApi'
import { useDispatch, useSelector, useStore } from 'react-redux'

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    pizzasSlice,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(pizzaApi.middleware),
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
