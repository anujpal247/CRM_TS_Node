import express from 'express';
import { UserController } from '../../controllers/user.controller';
import { validateRequestBody } from '../../validators';
import { createUserSchema } from '../../validators/user.validator';


const userRouter = express.Router();

userRouter.post('/signup', 
  validateRequestBody(createUserSchema), 
  UserController.createUser
);

export default userRouter;