export class EmailAlreadyExistError extends Error {
  constructor() {
    super("Email already in use");
    this.name = "EmailAlreadyExistError";
  }
}
