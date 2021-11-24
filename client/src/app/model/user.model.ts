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
<<<<<<< HEAD

/*export class User
{
  username: String;
  password: String;
  email: string;
  displayName: string;
}*/
=======
>>>>>>> 64aa9f1d522ac468c5c2432d5a2d43605efa8ea2

// export class User
// {
//   username: String;
//   password: String;
//   email: string;
//   displayName: string;
// }
