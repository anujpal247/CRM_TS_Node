import Ticket, { ITicket } from "../models/ticket.model";


export interface ITicketRepository {
  // Define ticket repository methods here
  create(data: Partial<ITicket>): Promise<ITicket>;
  get(id: string): Promise<ITicket | null>;
  getAll(): Promise<ITicket[]>;
  update(id: string, data: Partial<ITicket>): Promise<ITicket | null>;
  delete(id: string): Promise<boolean>;
}

export class TicketRepository implements ITicketRepository {
  async create(data: Partial<ITicket>): Promise<ITicket> {
    const ticket = await Ticket.create(data);
    return ticket;
  }

  async get(id: string): Promise<ITicket | null> {
    const ticket = await Ticket.findById(id);
    return ticket;
  }

  async getAll(): Promise<ITicket[]> {
    const tickets = await Ticket.find();
    return tickets;
  }

  async update(id: string, data: Partial<ITicket>): Promise<ITicket | null> {
    const ticket = await Ticket.findByIdAndUpdate(id, data, { new: true });
    return ticket;
  }

  async delete(id: string): Promise<boolean> {
    const result = await Ticket.findByIdAndDelete(id);
    return result ? true : false;
  }
}