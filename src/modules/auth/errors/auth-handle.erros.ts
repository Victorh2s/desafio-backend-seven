import { Response } from "express";

export function AuthHandleErrors(response: Response, error: unknown) {
  const errorMap: { [key: string]: number } = {
    EmailAlreadyExistError: 409,
    AuthInvalidError: 401,
    NotAuthorization: 401,
    NotAuthorizationRole: 403,
  };

  if (error instanceof Error) {
    const status = errorMap[error?.constructor?.name] || 500;
    const message =
      error instanceof Error ? error.message : "Erro desconhecido.";

    response.status(status).json({
      message,
      success: false,
    });
  }
}
