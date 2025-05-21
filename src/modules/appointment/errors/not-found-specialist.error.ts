export class NotFoundSpecialistError extends Error {
  constructor() {
    super("No specialists found");
    this.name = "NotFoundSpecialistError";
  }
}
