import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['admin', 'user', 'engineer']).array().optional(),
})

export type CreateUserDTO = z.infer<typeof createUserSchema>;

export const signinUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type SigninUserDTO = z.infer<typeof signinUserSchema>;