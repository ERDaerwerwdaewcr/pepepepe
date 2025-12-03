import { createSlice } from '@reduxjs/toolkit'

export interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: number;
  count: number;
  types: number[];
  sizes: number[];
}

export interface CounterState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CounterState = {
  totalPrice: 0,
  items: []
}

const calcTotal = (items: CartItem[]) => {
  return items.reduce((sum, obj) => {
    return sum + obj.price * obj.count
  }, 0)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id == action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = calcTotal(state.items)
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id == action.payload)
      if (findItem) {
        findItem.count--
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.totalPrice = calcTotal(state.items)
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    }
  },
})

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
