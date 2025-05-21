export class InvalidDataError extends Error {
  constructor() {
    super("Invalid date format. Use YYYY-MM-DD.");
    this.name = "InvalidDataError";
  }
}
