import { create } from "zustand";
import { HeroData, TypedColumn } from "@/utils/types/types";
import { fetchDataFromApi } from "../fetch/fetchIndex";

interface Hero {
  id: number;
  icon: string;
  title: string;
}

interface HeroStoreState {
  heroData: HeroData;
  setHeroData: (data: HeroStoreState["heroData"]) => void;
}

export const useHeroStore = create<HeroStoreState>((set) => ({
  heroData: {
    btn: "",
    id: 0,
    title: "",
    desc: "",
    listHeroIcon: [
      {
        id: 0,
        icon: "",
        title: "",
      },
    ],
  },
  setHeroData: (data) => set({ heroData: data }),
}));
