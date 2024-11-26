import axios from "axios";

// Use the environment variable for API base URL or fall back to a default
const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000/api";

export const createBooking = async (data: {
  childName: string;
  caregiverId: string;
  timeSlot: string;
}) => {
  return await axios.post(`${API_BASE_URL}/bookings`, data);
};

export const getBookings = async () => {
  return await axios.get(`${API_BASE_URL}/bookings`);
};
