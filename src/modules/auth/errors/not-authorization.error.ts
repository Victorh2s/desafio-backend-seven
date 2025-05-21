export class NotAuthorizationError extends Error {
  constructor() {
    super("Not Authorization");
    this.name = "NotAuthorizationError";
  }
}
