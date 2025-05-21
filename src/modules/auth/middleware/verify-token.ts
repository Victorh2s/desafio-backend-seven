import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRepository } from "src/shared/config/prisma/database/auth-repository";
import { NotAuthorizationError } from "../errors/not-authorization.error";
import { AuthHandleErrors } from "../errors/auth-handle.erros";

interface TokenPayLoad {
  token: string;
  id: string;
  iat: number;
  exp: number;
}

export async function VerifyTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    AuthHandleErrors(res, new NotAuthorizationError());
    return;
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const authRepository = new AuthRepository();

    const data = jwt.verify(token, process.env.JWT_SECRET as string);

    const { id } = data as TokenPayLoad;

    const user = await authRepository.findUserById(id);

    if (!user) {
      AuthHandleErrors(res, new NotAuthorizationError());
      return;
    }

    req.auth_routes = {
      userId: user.id,
      token: token,
      email: user.email,
      role: user.role,
    };

    return next();
  } catch (error) {
    AuthHandleErrors(res, error);
  }
}
