export class User{
  private email: string;
  private password: string;


  constructor(){}
  // getter
  public get getEmail(): string {
    return this.email;
  }
  public get getPassword(): string{
    return this.password;
  }
  // setter
  public set setEmail(value: string){
    this.email =value;
  }
  public set setPassword(value: string ){
    this.password= value;
  }
}
