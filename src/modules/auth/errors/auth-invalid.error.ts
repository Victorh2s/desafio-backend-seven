export class AuthInvalidError extends Error {
  constructor() {
    super("Invalid username or password.");
    this.name = "AuthInvalidError";
  }
}
