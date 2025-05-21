export class NotAuthorizationRole extends Error {
  constructor() {
    super("Your role does not have permission to access this feature.");
    this.name = "NotAuthorizationRole";
  }
}
