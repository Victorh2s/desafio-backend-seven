export class UserNotFoundError extends Error {
  constructor() {
    super("No user was found with this ID.");
    this.name = "UserNotFoundError";
  }
}
