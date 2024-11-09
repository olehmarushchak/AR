import { create } from "zustand";

export const useStore = create((set) => ({
  qrCode: false,
  color: "",
  toggleQrCode: () => set((state) => ({ qrCode: !state.qrCode })),
  setColor: (color) => set({ color }),
}));
