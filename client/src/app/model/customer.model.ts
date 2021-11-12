import { Guid } from 'guid-typescript';

export class Customer {
  public id: string;

  constructor(
    public FName: string,
    public LName: string,
    public Email: string,
    public Number: string
  ) {
    this.id = Guid.create().toString();
  }
}
