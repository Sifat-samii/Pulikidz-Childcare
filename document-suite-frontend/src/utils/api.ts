import axios from 'axios';

// Import the API base URL from the constants file
import { API_BASE_URL } from '../constants/Config';

// Create an Axios instance for centralized configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// TypeScript type for the booking data (adjust based on your API response structure)
export interface Booking {
  id: string;
  user: string;
  date: string;
  time: string;
  status: string;
}

// Fetch bookings from the API
export const fetchBookings = async (): Promise<Booking[] | null> => {
  try {
    const response = await api.get<Booking[]>('/bookings');
    return response.data;
  } catch (error: any) {
    console.error('Error fetching bookings:', error?.message || error);
    return null; // Return null to handle the error gracefully
  }
};

export default api;
