import { create } from "zustand";

type CounterStore = {
  count: number;
};

export const useCounterStore = create<CounterStore>(() => ({
  count: 0,
}));
