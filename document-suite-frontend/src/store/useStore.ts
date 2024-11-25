import create from 'zustand';

interface AppState {
  user: any;
  bookings: any[];
  activities: any[];
  setUser: (user: any) => void;
  setBookings: (bookings: any[]) => void;
  setActivities: (activities: any[]) => void;
}

const useStore = create<AppState>((set) => ({
  user: null,
  bookings: [],
  activities: [],
  setUser: (user) => set({ user }),
  setBookings: (bookings) => set({ bookings }),
  setActivities: (activities) => set({ activities }),
}));

export default useStore;
