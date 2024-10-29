import { create } from "zustand";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface StoreState {
  meals: Meal[];
  searchQuery: string;
  setMeals: (meals: Meal[]) => void;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  meals: [],
  searchQuery: "",
  setMeals: (meals: Meal[]) => set({ meals }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
