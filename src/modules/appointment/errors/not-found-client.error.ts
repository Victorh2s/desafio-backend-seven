export class NotFoundClientError extends Error {
  constructor() {
    super("No client found");
    this.name = "NotFoundClientError";
  }
}
