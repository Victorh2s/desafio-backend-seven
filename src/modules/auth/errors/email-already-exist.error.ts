export class EmailAlreadyExistError extends Error {
  statusCode: number;

  constructor() {
    super("Email already in use");
    this.name = "EmailAlreadyExistError";
    this.statusCode = 409; // Conflict
  }
}
