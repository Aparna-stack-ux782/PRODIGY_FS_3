import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  token: null,
  cart: [],
  
  setUser: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
  setCart: (cart) => set({ cart }),
  addToCart: (item) => set((state) => ({
    cart: [...state.cart, item],
  })),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.productId !== id),
  })),
}));

export default useStore;
