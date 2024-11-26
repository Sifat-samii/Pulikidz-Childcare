import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Example model for creating a booking
export const createBooking = async (childName: string, caregiverId: number, timeSlot: string) => {
  return await prisma.booking.create({
    data: {
      childName,
      caregiverId,
      timeSlot,
    },
  });
};

