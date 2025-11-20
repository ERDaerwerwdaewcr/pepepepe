import { useState } from 'react';

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

export const usePizzas = () => {
  const [items, setItems] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterId, setFilterId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState<SortType>({
    name: 'популярности',
    sortProperty: 'rating',
  });

  return {
    items,
    setItems,
    isLoading,
    setIsLoading,
    filterId,
    setFilterId,
    sortType,
    setSortType,
    currentPage,
    setCurrentPage,
  };
};