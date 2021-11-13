import { Guid } from 'guid-typescript';
export class User {
  public id: string;

  constructor(
    public FirstName: string,
    public LastName: string,
    public Email: string,
    public UserName: string,
    public Number: string,
    public UserType: String
  ) {
    this.id = Guid.create().toString();
  }
}
