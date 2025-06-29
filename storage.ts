import { contacts, classBookings, users, type Contact, type ClassBooking, type User, type InsertContact, type InsertClassBooking, type InsertUser } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createClassBooking(booking: InsertClassBooking): Promise<ClassBooking>;
  getContacts(): Promise<Contact[]>;
  getClassBookings(): Promise<ClassBooking[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private classBookings: Map<number, ClassBooking>;
  private currentUserId: number;
  private currentContactId: number;
  private currentBookingId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.classBookings = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentBookingId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      phone: insertContact.phone || null,
      interest: insertContact.interest || null,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createClassBooking(insertBooking: InsertClassBooking): Promise<ClassBooking> {
    const id = this.currentBookingId++;
    const booking: ClassBooking = { 
      ...insertBooking, 
      id, 
      phone: insertBooking.phone || null,
      createdAt: new Date()
    };
    this.classBookings.set(id, booking);
    return booking;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getClassBookings(): Promise<ClassBooking[]> {
    return Array.from(this.classBookings.values());
  }
}

export const storage = new MemStorage();
