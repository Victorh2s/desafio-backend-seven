import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRepository } from "src/shared/config/prisma/database/auth-repository";
import { NotAuthorization } from "../errors/not-authorization";
import { AuthHandleErrors } from "../errors/auth-handle.erros";

interface TokenPayLoad {
  token: string;
  id: string;
  iat: number;
  exp: number;
}

export async function VerifyTokenMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { authorization } = request.headers;

  if (!authorization) {
    AuthHandleErrors(response, new NotAuthorization());
    return;
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const authRepository = new AuthRepository();

    const data = jwt.verify(token, process.env.TOKEN_SECRET as string);

    const { id } = data as TokenPayLoad;

    const user = await authRepository.findUserById(id);

    if (!user) {
      AuthHandleErrors(response, new NotAuthorization());
      return;
    }

    request.auth_routes = {
      userId: user.id,
      token: token,
      email: user.email,
      role: user.role,
    };

    return next();
  } catch (error) {
    AuthHandleErrors(response, error);
  }
}
