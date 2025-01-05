"use client";

import { create } from "zustand";
import { MenuItem } from "@/lib/types/menu";

interface SelectedMenuState {
  selectedMenu: MenuItem | null;
  setSelectedMenu: (menu: MenuItem | null) => void;
}

export const useSelectedMenu = create<SelectedMenuState>((set) => ({
  selectedMenu: null,
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}));
