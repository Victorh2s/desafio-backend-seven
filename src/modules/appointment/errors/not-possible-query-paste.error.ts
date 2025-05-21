export class NotPossibleQueryPastDatesError extends Error {
  constructor() {
    super("It is not possible to query past dates.");
    this.name = "NotPossibleQueryPastDatesError";
  }
}
