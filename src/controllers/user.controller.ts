import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";


const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export const UserController = {
  createUser: async (req: Request, res: Response): Promise<void>  => {
    const user = await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      data: user,
      message: "User created successfully"
    })
  },

  signinUser: async (req: Request, res: Response): Promise<void> => {
    const token = await userService.signinUser(req.body);

    res.status(200).json({
      success: true,
      data: { token },
      message: "User signed in successfully"
    });
  },

  getUserProfile: async (req: Request, res: Response): Promise<void> => {
    const userId = (req as any).user.id;
    
    const user = await userService.getUserProfile(userId);

    res.status(200).json({
      success: true,
      data: user,
      message: "User profile fetched successfully"
    });
  }
}