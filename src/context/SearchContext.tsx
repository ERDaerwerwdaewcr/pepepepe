import { createContext } from "react";

interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}


export const SearchContext = createContext<SearchContextType>({
  searchValue: '',
  setSearchValue: () => { },
});