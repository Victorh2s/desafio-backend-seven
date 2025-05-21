export class NotAuthorizationRoleError extends Error {
  constructor() {
    super("Your role does not have permission to access this feature.");
    this.name = "NotAuthorizationRoleError";
  }
}
