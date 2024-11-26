import { Request, Response, NextFunction } from "express";

// Dummy authentication middleware
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized");
  }
  next();
};
