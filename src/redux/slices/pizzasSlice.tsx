import { createSlice } from '@reduxjs/toolkit'



export interface PizzasItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: number;
  count: number;
  types: string[];
  sizes: number[];
}

export interface CounterState {
  items: PizzasItem[];
}

const initialState: CounterState = {
  items: []
}

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
})

export const { setItems } = pizzasSlice.actions


export default pizzasSlice.reducer