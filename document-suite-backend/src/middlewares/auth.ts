import { Request, Response, NextFunction } from "express";
import { verifyToken } from "@clerk/clerk-sdk-node";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send("Unauthorized");

    try {
        const user = await verifyToken(token);
        req.user = user;
        next();
    } catch (error) {
        res.status(403).send("Invalid token");
    }
};
