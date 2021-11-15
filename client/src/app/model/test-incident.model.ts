import { Priority } from './priority.enum';
import { User } from './user.model';
import { Customer } from './customer.model';

export class TestIncident {
  constructor(
    public incidentID: String,
    public priority: String,
    public status: String,
    public firstName: String,
    public lastName: String,
    public email: String,
    public phoneNumber: String,
    public description: String,
    public narrative: String,
    public dateCreated: Date,
    public dateModified: Date,
    public resolutionField: String
  ) {}
  public toString(): string {
    return `Incident: 
    ----------------
    ID: ${this.incidentID}
    Priority: ${this.priority}
    Description: ${this.description}`;
  }
}
