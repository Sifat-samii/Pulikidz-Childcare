import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import bookingsRoutes from "./routes/bookings"; // Import the bookings routes

dotenv.config();

const app = express();

app.use(bodyParser.json()); // Middleware to parse JSON requests
app.use("/api/bookings", bookingsRoutes); // Use bookings routes for the "/api/bookings" path

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
