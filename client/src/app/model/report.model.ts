import { Priority } from './priority.enum';
import { User } from './user.model';
import { Customer } from './customer.model';

export class Report {
  public id: string;
  public Resolution?: string;

  constructor(
    public Priority: Priority,
    public Status: string,
    public User: User,
    public Date: Date,
    public Description: string,
    public Narrative: string,
    public Customer: Customer
  ) {
    this.id = Date.toDateString();
  }
}
