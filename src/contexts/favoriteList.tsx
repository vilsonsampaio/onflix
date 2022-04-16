import { createContext, ReactNode, useContext } from 'react';

import { Movie } from '@services/MoviesService';

import { usePersistedState } from '@hooks/usePersistedState';

interface FavoriteListProviderProps {
  children: ReactNode;
}

export interface FavoriteListContextProps {
  favoriteList: number[];
  toggleFromFavoriteList: (movie: Movie) => void;
  addToFavoriteList: (movie: Movie) => void;
  removeFromFavoriteList: (id: number) => void;
  checkIsFavorite: (id: number) => boolean;
}

export const FavoriteListContext = createContext<FavoriteListContextProps>({} as FavoriteListContextProps);

export function useFavoriteList(): FavoriteListContextProps {
  const context = useContext(FavoriteListContext);

  if (!context) throw new Error('useFavoriteList must be used within an FavoriteListProvider');

  return context;
}

export function FavoriteListProvider({ children }: FavoriteListProviderProps) {
  const [favoriteList, setFavoriteList] = usePersistedState<number[]>('favoriteList', []);

  function addToFavoriteList(movie: Movie) {
    setFavoriteList([...favoriteList, movie.id]);
  }

  function removeFromFavoriteList(id: number) {
    setFavoriteList(favoriteList.filter(favorite => favorite !== id));
  }

  function toggleFromFavoriteList(movie: Movie) {
    const isMoviesAlreadyInserted = favoriteList.some(favorite => favorite === movie.id);

    if (isMoviesAlreadyInserted) {
      removeFromFavoriteList(movie.id);
    } else {
      addToFavoriteList(movie);
    }
  }

  function checkIsFavorite(id: number) {
    return favoriteList.some(favorite => favorite === id)
  }

  return (
    <FavoriteListContext.Provider value={{ favoriteList, addToFavoriteList, removeFromFavoriteList, toggleFromFavoriteList, checkIsFavorite }}>
      {children}
    </FavoriteListContext.Provider>
  );
}