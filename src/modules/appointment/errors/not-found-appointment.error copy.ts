export class NotFoundAppointmentError extends Error {
  constructor() {
    super("Appointment not found");
    this.name = "NotFoundAppointmentError";
  }
}
