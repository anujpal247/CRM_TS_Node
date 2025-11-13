import { z } from "zod";

export const createTicketSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1),
  status: z.enum(['open', 'in_progress', 'resolved', 'closed', 'on_hold']).optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional(),
  createdBy: z.string().length(24), // MongoDB ObjectId
  assignedTo: z.string().length(24).optional(), // MongoDB ObjectId
});

export type CreateTicketDTO = z.infer<typeof createTicketSchema>;