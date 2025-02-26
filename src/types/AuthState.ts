export interface User {
  id?: string;
  name: string;
  email: string;
  role?: string;
}

export interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}
