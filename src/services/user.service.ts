import { serverConfig } from "../config";
import { IUser } from "../models/user.model";
import { IUserRepository } from "../repositories/user.repository";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";
import { CreateUserDTO, SigninUserDTO } from "../validators/user.validator";
import jwt from 'jsonwebtoken';

export interface IUserService {
  createUser(data: CreateUserDTO): Promise<IUser>;
  signinUser(data: SigninUserDTO): Promise<string>;
  getUserProfile(id: string): Promise<IUser | null>;
}

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(data: CreateUserDTO): Promise<IUser> {
    const userExists = await this.userRepository.findByEmail(data.email);
    if (userExists) {
      throw new BadRequestError("Email already in use");
    }

    const user = await this.userRepository.createUser(data);
    return user;
  }

  async signinUser(data: SigninUserDTO): Promise<string> {
    // Implementation for user sign-in and JWT token generation goes here
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) {
      throw new NotFoundError(`User not found with email: ${data.email}`);
    }
    // Validate password (omitted for brevity)
    const isPasswordValid = await (user as any).comparePassword(data.password);
    if (!isPasswordValid) {
      throw new BadRequestError("Invalid password");
    }
    // Generate JWT token (omitted for brevity)
    const tokenPayload = { id: user._id, email: user.email, role: user.role };
    const token = jwt.sign(tokenPayload, serverConfig.JWT_SECRET, { expiresIn: '1h' });
    return token;
  }

  async getUserProfile(id: string): Promise<IUser | null> {
  
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundError(`User not found with id: ${id}`);
    }
    return user;
  }

}