import { Priority } from './priority.enum';
import { User } from './user.model';
import { Customer } from './customer.model';

export class Incident {
  public resolutionField?: string;
  public phoneNumber?: string;
  public dataModified?: string;

  constructor(
    public incidentID: string,
    public priority: string,
    public status: string,
    public userName: string,
    public dateCreated: string,
    public description: string,
    public narrative: string,
    public customerName: string
  ) {}

  public toString(): string {
    return `Incident:
    ----------------
    ID: ${this.incidentID}
    Priority: ${this.priority}
    Description: ${this.description}`;
  }
}
