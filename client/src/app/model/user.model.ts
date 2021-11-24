import { Guid } from 'guid-typescript';
export class User {
  public userID: string;
  public Number?: string;

  constructor(
    public username: string,
    public email: string,
    public displayName: string,
    public firstName: string,
    public lastName: string,
    public userType: String
  ) {
    this.userID = Guid.create().toString();
  }
}

/*export class User
{
  username: String;
  password: String;
  email: string;
  displayName: string;
}*/



