
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  filterId: number;
  pageCount: number;
  sort: {
    name: string;
    sortProperty: string;
  };
  searchValue: string
}

const initialState: CounterState = {
  filterId: 0,
  pageCount: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
  searchValue: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterId(state, action) {
      state.filterId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setPageCount(state, action) {
      state.pageCount = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    }
  },
})

export const { setFilterId, setSort, setPageCount, setSearchValue } = filterSlice.actions

export default filterSlice.reducer

