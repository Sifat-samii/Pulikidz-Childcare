import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Service to fetch all bookings
export const getBookingsService = async () => {
  return await prisma.booking.findMany();
};

// Service to create a new booking
export const createBookingService = async (bookingData: any) => {
  return await prisma.booking.create({
    data: bookingData
  });
};
