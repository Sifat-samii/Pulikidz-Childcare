import { Request, Response } from "express";
import { createBookingService, getBookingsService } from "../services/bookingService";

// Get all bookings
export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await getBookingsService();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error });
  }
};

// Create a new booking
export const createBooking = async (req: Request, res: Response) => {
  try {
    const newBooking = await createBookingService(req.body);
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: "Failed to create booking", error });
  }
};
