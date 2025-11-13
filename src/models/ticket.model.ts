import mongoose, { Document, Types } from 'mongoose';

export interface ITicket extends Document {
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdBy: Types.ObjectId; // User ID
  assignedTo?: string; // User ID
}
export enum TicketStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  RESOLVED = 'resolved',
  CLOSED = 'closed',
  ON_HOLD = 'on_hold',
}

export enum TicketPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent',
}

const ticketSchema = new mongoose.Schema<ITicket>({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  status: {
    type: String,
    enum: Object.values(TicketStatus),
    default: TicketStatus.OPEN,
  },
  priority: {
    type: String,
    enum: Object.values(TicketPriority),
    default: TicketPriority.MEDIUM,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'CreatedBy is required'],
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
})

const Ticket = mongoose.model<ITicket>('Ticket', ticketSchema);

export default Ticket;