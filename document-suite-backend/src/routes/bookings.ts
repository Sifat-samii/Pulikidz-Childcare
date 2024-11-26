import express from "express";
const router = express.Router();

// Example route for creating a new booking
router.post("/", async (req, res) => {
  const { childName, caregiverId, timeSlot } = req.body;
  // Logic to save booking to the database
  res.status(201).send({ message: "Booking created successfully" });
});

// Example route for viewing all bookings
router.get("/", async (req, res) => {
  // Logic to fetch all bookings from the database
  res.status(200).send([{ childName: "John Doe", caregiverId: 1, timeSlot: "10:00 AM" }]);
});

export default router;
