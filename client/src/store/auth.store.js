import { create } from "zustand";
import api from "../api";
import toast from "react-hot-toast";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  login: async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    console.log(`server response: ${res[0]}`);
    set({ user: res.data.user, token: res.data.token });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  },
  register: async (formData) => {
    const res = await api.post("/auth/register", formData);
    set({ user: res.data.user, token: res.data.token });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  },
  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout successful");
  },
  updateProfile: async (formData) => {
    const res = await api.put("/auth/update", formData);
    set({ user: res.data });
    localStorage.setItem("user", JSON.stringify(res.data));
  },

  isEditing: false,

  startEditing: () => set({ isEditing: true }),

  stopEditing: () => set({ isEditing: false }),
}));

export default useAuthStore;
