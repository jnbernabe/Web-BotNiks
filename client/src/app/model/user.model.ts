import { Guid } from 'guid-typescript';
export class User {
  public userID: string;
  public Number?: string;

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public username: string,
    public displayName: string,
    public userType: String
  ) {
    this.userID = Guid.create().toString();
  }
}
