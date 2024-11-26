import dotenv from "dotenv";
dotenv.config();

const config = {
  CLERK_API_KEY: process.env.CLERK_API_KEY,
  CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API,
};

export default config;
