import { ITicket } from "../models/ticket.model";
import { ITicketRepository } from "../repositories/ticket.repository";
import { CreateTicketDTO } from "../validators/ticket.validator";

export interface ITicketService {
  createTicket(data: CreateTicketDTO): Promise<ITicket>;
  getTicket(id: string): Promise<ITicket | null>;
  getAllTickets(): Promise<ITicket[]>;
  updateTicket(id: string, data: Partial<ITicket>): Promise<ITicket | null>;
  deleteTicket(id: string): Promise<boolean>;
}

export class TicketService implements ITicketService {
  private ticketRepository;

  constructor(ticketRepository: ITicketRepository) {
    this.ticketRepository = ticketRepository;
  }

  async createTicket(data: CreateTicketDTO): Promise<ITicket> {
    const ticket = await this.ticketRepository.create(data);
    return ticket;
  }

  async getTicket(id: string): Promise<ITicket | null> {
    const ticket = await this.ticketRepository.get(id);
    return ticket;
  }

  async getAllTickets(): Promise<ITicket[]> {
    const tickets = await this.ticketRepository.getAll();
    return tickets;
  }

  async updateTicket(id: string, data: Partial<ITicket>): Promise<ITicket | null> {
    const ticket = await this.ticketRepository.update(id, data);
    return ticket;
  }

  async deleteTicket(id: string): Promise<boolean> {
    const result = await this.ticketRepository.delete(id);
    return result;
  }
}