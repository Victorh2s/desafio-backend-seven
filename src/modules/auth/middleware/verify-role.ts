import { Request, Response, NextFunction } from "express";
import { AuthHandleErrors } from "../errors/auth-handle.erros";
import { $Enums } from "prisma/generated";
import { NotAuthorizationRoleError } from "../errors/not-authorization-role.error";

export function VerifyRoleMiddleware(roleToVerify: $Enums.Role) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.auth_routes;

    try {
      if (role !== "ADMIN" && role !== roleToVerify) {
        AuthHandleErrors(res, new NotAuthorizationRoleError());
        return;
      }

      return next();
    } catch (error) {
      AuthHandleErrors(res, error);
    }
  };
}
