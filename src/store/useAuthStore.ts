// Zustand
import { create } from "zustand";
import { User } from "@/types/User";

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
