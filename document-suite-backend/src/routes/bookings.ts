import express from "express";
import { authMiddleware } from "../middlewares/auth"; // Import auth middleware
import { getBookings } from "../controllers/bookingController"; // Import controller functions (make sure they exist)

const router = express.Router();

// Define a protected route for getting bookings
router.get("/", authMiddleware, getBookings); // Apply authMiddleware to protect this route

export default router;
