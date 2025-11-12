import { NextFunction, Request, Response } from "express";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../utils/errors/app.error";
import jwt from 'jsonwebtoken';
import { serverConfig } from "../config";


export function isAuthenticated(req: Request, res: Response, next: NextFunction){
    // Middleware logic to check if the user is logged in
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new BadRequestError("Authorization header missing");
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        throw new NotFoundError("Token missing");
    }

    // Verify token
    // If valid, call next(), else return 401 Unauthorized
    try {
      const decoded = jwt.verify(token, serverConfig.JWT_SECRET);
      console.log("user decoded", decoded);
      (req as any).user = decoded; // Attach decoded token to request object
      next();
    } catch (error) {
      throw new UnauthorizedError("Invalid or expired token");
    }
}