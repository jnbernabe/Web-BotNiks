/*
Created by: Han
Incident Model

 */
export class Incident {
  constructor(
    public incidentID: string,
    public priority: string,
    public status: string,
    public userName: string,
    public dateCreated: string,
    public description: string,
    public narrative: string,
    public resolutionField: string,
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
