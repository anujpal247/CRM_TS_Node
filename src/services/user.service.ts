import { IUser } from "../models/user.model";
import { IUserRepository } from "../repositories/user.repository";
import { BadRequestError } from "../utils/errors/app.error";
import { CreateUserDTO } from "../validators/user.validator";

export interface IUserService {
  createUser(data: CreateUserDTO): Promise<IUser>;
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

}