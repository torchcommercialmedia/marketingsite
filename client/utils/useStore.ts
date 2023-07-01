import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { PricingStore } from "./types/types";

// const usePricingStore = create<PricingStore>(
//   devtools(
//     persist(
//       (set) => ({
//         price: 0,
//         increase: (by: any) => set((state) => ({ bears: state.bears + by })),
//       }),
//       {
//         name: 'bear-storay'
//       }
//     )
//   )
// )
