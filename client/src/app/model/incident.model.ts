import { Priority } from './priority.enum';
import { User } from './user.model';
import { Customer } from './customer.model';

export class Incident {
  public Resolution?: string;
  public incidentID?: string;
  constructor(
    public id: string,
    public Priority: string,
    public Status: string,
    public User: User | undefined,
    public Date: Date | undefined,
    public Description: string,
    public Narrative: string,
    public Customer: Customer | undefined
  ) {}

  public toString(): string {
    return `Incident:
    ----------------
    ID: ${this.id}
    Priority: ${this.Priority}
    Description: ${this.Description}`;
  }
}
