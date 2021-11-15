import { Priority } from './priority.enum';
import { User } from './user.model';
import { Customer } from './customer.model';

export class Incident {
  public Resolution?: string;

  constructor(
    public id: string,
    public Priority: string,
    public Status: string,
    public User: User,
    public Date: Date,
    public Description: string,
    public Narrative: string,
    public Customer: Customer
  ) {}

  public toString(): string {
    return `Incident: 
    ----------------
    ID: ${this.id}
    Priority: ${this.Priority}
    Description: ${this.Description}`;
  }
}
