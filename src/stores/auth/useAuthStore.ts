// Zustand
import {create} from "zustand";
import {AuthState} from "@/types/AuthState";
import LogoutUser from "@/services/LogoutUser";



export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({user}),
  logout: () => {
    console.log("user removed ");
    set({user: null});
    LogoutUser();
  },
}));
