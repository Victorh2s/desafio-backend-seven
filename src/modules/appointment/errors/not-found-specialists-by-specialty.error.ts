export class NotFoundSpecialistsBySpecialtyError extends Error {
  constructor() {
    super("No specialists found for this specialty");
    this.name = "NotFoundSpecialistsError";
  }
}
