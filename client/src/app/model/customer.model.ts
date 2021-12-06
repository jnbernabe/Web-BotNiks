import { Guid } from 'guid-typescript';

export class Customer {
  public customerId: String;
  constructor(
    public firstName: String,
    public lastName: String,
    public email: String,
    public phoneNumber: String
  ) {
    this.customerId = Guid.create().toString();
  }
}
