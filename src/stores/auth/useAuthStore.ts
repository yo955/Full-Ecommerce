// Zustand
import {create} from "zustand";
import {AuthState} from "@/types/AuthState";
import LogoutUser from "@/services/Auth/LogoutUser";

const STORAGE_KEY = "authUser"

export const useAuthStore = create<AuthState>((set) => ({
  user: typeof window !== "undefined" ? JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') : null,
  setUser: (user) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    set({user})
  },
  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
    set({user: null});
    LogoutUser();
  },
}));
