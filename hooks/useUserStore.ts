import { create } from 'zustand';

type UserState = { user: any | null; role: string | null; setUser: (u:any, r:string)=>void; clearUser: ()=>void; };
export const useUserStore = create<UserState>((set) => ({
  user: null,
  role: null,
  setUser: (user, role) => set({ user, role }),
  clearUser: () => set({ user: null, role: null }),
}));
