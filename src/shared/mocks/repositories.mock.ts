import { AppointmentRepository } from "../config/prisma/database/appointment-repository";
import { AuditLogRepository } from "../config/prisma/database/audit-log-repository";
import { AuthRepository } from "../config/prisma/database/auth-repository";
import { ClientRepository } from "../config/prisma/database/client-repository";
import { SpecialistRepository } from "../config/prisma/database/specialist-repository";

export const mockSpecialistRepository: jest.Mocked<SpecialistRepository> = {
  findManySpecialistsBySpecialty: jest.fn(),
  registerAvailability: jest.fn(),
  findSpecialistsByID: jest.fn(),
  findSpecialistsByUserId: jest.fn(),
};

export const mockAppointmentRepository: jest.Mocked<AppointmentRepository> = {
  findManyExistingAppointments: jest.fn(),
  createAppointment: jest.fn(),
  findAppointmentBySpecialististId: jest.fn(),
  findAppointmentById: jest.fn(),
  updateAppointmentForCancelled: jest.fn(),
  updateAppointmentStatus: jest.fn(),
  findAppointmentsForNotification: jest.fn(),
  findManyForScheduler: jest.fn(),
};

export const mockClientRepository: jest.Mocked<ClientRepository> = {
  findClientByUserId: jest.fn(),
};

export const mockAuditLogRepository: jest.Mocked<AuditLogRepository> = {
  createAuditLog: jest.fn(),
};

export const mockAuthRepository: jest.Mocked<AuthRepository> = {
  registerUser: jest.fn(),
  findUserByEmail: jest.fn(),
  findUserById: jest.fn(),
};
