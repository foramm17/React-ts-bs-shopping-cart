import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type FavoritesContextType = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

const FavoritesContext = createContext({} as FavoritesContextType);

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);

  const toggleFavorite = (id: number) => {
    setFavorites((curr) =>
      curr.includes(id) ? curr.filter((itemId) => itemId !== id) : [...curr, id]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
