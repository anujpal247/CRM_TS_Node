import express from 'express';
import { UserController } from '../../controllers/user.controller';
import { validateRequestBody } from '../../validators';
import { createUserSchema, signinUserSchema } from '../../validators/user.validator';
import { isAuthenticated } from '../../middlewares/auth.middleware';


const userRouter = express.Router();

userRouter.post('/signup', 
  validateRequestBody(createUserSchema), 
  UserController.createUser
);

userRouter.post('/signin',
  validateRequestBody(signinUserSchema), 
  UserController.signinUser
);

userRouter.get('/profile', isAuthenticated, UserController.getUserProfile)
userRouter.get('/', UserController.getAllUsers);


export default userRouter;