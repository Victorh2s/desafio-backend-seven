export class LateCancellationError extends Error {
  constructor() {
    super("Cancellation must be done at least 6 hours before the appointment");
    this.name = "LateCancellationError";
  }
}
