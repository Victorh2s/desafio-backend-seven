import { Response } from "express";

export function AppointmentHandleErrors(response: Response, error: unknown) {
  const errorMap: { [key: string]: number } = {
    UserNotFoundError: 404,
    NotFoundClientError: 404,
    SlotNotAvailableError: 400,
    NotFoundSpecialistError: 404,
    NotFoundSpecialistsBySpecialtyError: 404,
    NotPossibleQueryPastDatesError: 400,
    InvalidDataError: 400,
    NotFoundAppointmentError: 404,
    LateCancellationError: 422,
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
