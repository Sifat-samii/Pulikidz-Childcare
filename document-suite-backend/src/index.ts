import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import bookingsRoutes from "./routes/bookings"; // Import the bookings routes
import { clerkMiddleware } from "@clerk/express"; // Correct import for Clerk middleware
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

// Load environment variables from a .env file into process.env
dotenv.config();

// Initialize the Express app
const app = express();

// Apply Clerk middleware globally to handle authentication
app.use(clerkMiddleware());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Custom authentication middleware (optional, adjust if needed)
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.auth?.userId; // Access the userId from Clerk's authentication
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next(); // If authenticated, proceed to the next middleware
};

// Use bookings routes for the "/api/bookings" path
app.use("/api/bookings", authMiddleware, bookingsRoutes);

// Define a simple route for the root path
app.get("/", (req, res) => {
  res.send("Welcome to the Pulikids Backend API!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)