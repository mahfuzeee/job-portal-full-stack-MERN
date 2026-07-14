import { create } from "zustand";

const useDashboardStore = create((set) => ({
  tab: "profile",
  setTab: (activeTab) => set({ tab: activeTab }),
}));

export default useDashboardStore;
