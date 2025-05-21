export class NotAuthorization extends Error {
  constructor() {
    super("Not Authorization");
    this.name = "NotAuthorization";
  }
}
