import { Priority } from './priority.enum';
import { User } from './user.model';

export class Report {
  public id: string;
  public Resolution?: string;

  constructor(
    public Priority: Priority,
    public Status: string,
    public User: User,
    public Date: Date,
    public Description: string,
    public Narrative: string
  ) {
    this.id = Date.toDateString();
  }
}
