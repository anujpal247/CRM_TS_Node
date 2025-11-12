import User, { IUser } from "../models/user.model";
import { CreateUserDTO } from "../validators/user.validator";

export interface IUserRepository {
  createUser(data: CreateUserDTO): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
}

export class UserRepository implements IUserRepository {
  async createUser(data: IUser): Promise<IUser> {
    const user = await User.create(data);
    user.password = ""; // Hide password
    return user;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<IUser | null> {
    const user = await User.findById(id).select("-password");
    return user;
  }
}