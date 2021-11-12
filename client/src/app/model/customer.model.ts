export class Customer {
  public id: string;

  constructor(
    public FName: string,
    public LName: string,
    public Email: string,
    public Number: string
  ) {
    const max = 1000000;
    this.id = Math.floor(Math.random() * (max + 1)).toString();
  }
}
