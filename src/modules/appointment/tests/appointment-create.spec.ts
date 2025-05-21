import { AppointmentService } from "../appointment.service";
import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { ClientRepository } from "src/shared/config/prisma/database/client-repository";
import { AuditLogRepository } from "src/shared/config/prisma/database/audit-log-repository";
import { NotFoundClientError } from "../errors/not-found-client.error";
import { NotFoundSpecialistError } from "../errors/not-found-specialist.error";
import { SlotNotAvailableError } from "../errors/slot-not-available.error";
import { AppointmentStatus } from "prisma/generated";

const mockSpecialistRepository: jest.Mocked<SpecialistRepository> = {
  findManySpecialistsBySpecialty: jest.fn(),
  registerAvailability: jest.fn(),
  findSpecialistsByID: jest.fn(),
};

const mockAppointmentRepository: jest.Mocked<AppointmentRepository> = {
  findManyExistingAppointments: jest.fn(),
  createAppointment: jest.fn(),
  findAppointmentBySpecialististId: jest.fn(),
};

const mockClientRepository: jest.Mocked<ClientRepository> = {
  findClientByUserId: jest.fn(),
};

const mockAuditLogRepository: jest.Mocked<AuditLogRepository> = {
  createAuditLog: jest.fn(),
};

describe("AppointmentService - createAppointment", () => {
  let service: AppointmentService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new AppointmentService(
      mockSpecialistRepository,
      mockClientRepository,
      mockAppointmentRepository,
      mockAuditLogRepository,
    );
  });

  const clientMock = {
    id: "client-1",
    user_id: "user-123",
    phone: "11999999999",
    cpf: "12345678900",
    created_at: new Date(),
    updated_at: new Date(),
    user: {
      id: "user-123",
      name: "João Cliente",
      email: "joao@example.com",
      password: "hashed-password",
      role: "client" as const,
      priority: false,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
  };

  const specialistMock = {
    id: "spec-1",
    user_id: "user-1",
    specialty: "nutrition",
    daily_limit: 8,
    min_interval_minutes: 30,
    availability: JSON.stringify({
      monday: ["09:00", "10:00", "11:00", "14:00"],
      tuesday: ["09:00", "10:00", "11:00"],
      wednesday: ["09:00", "10:00"],
    }),
    created_at: new Date(),
    updated_at: new Date(),
    user: {
      id: "user-1",
      name: "Dr. Nutrition",
      email: "nutrition@example.com",
      password: "hashed",
      role: "specialist" as const,
      priority: false,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
  };

  const appointmentMock = {
    id: "appointment-1",
    created_at: new Date(),
    updated_at: new Date(),
    status: "scheduled" as AppointmentStatus,
    date: new Date("2025-05-22"),
    time: "10:00",
    client_id: "client-123",
    specialist_id: "specialist-456",
    scheduled_by_id: "admin-999",
    rescheduled_from_id: null,
  };

  it("should throw NotFoundClientError if client is not found", async () => {
    mockClientRepository.findClientByUserId.mockResolvedValue(null);

    await expect(
      service.createAppointment(
        "user-123",
        "spec-1",
        "2025-01-06",
        "09:00",
        "scheduler-1",
      ),
    ).rejects.toThrow(NotFoundClientError);
  });

  it("should throw NotFoundSpecialistError if specialist is not found", async () => {
    mockClientRepository.findClientByUserId.mockResolvedValue(clientMock);
    mockSpecialistRepository.findSpecialistsByID.mockResolvedValue(null);

    await expect(
      service.createAppointment(
        "user-123",
        "spec-1",
        "2025-01-06",
        "09:00",
        "scheduler-1",
      ),
    ).rejects.toThrow(NotFoundSpecialistError);
  });

  it("should throw SlotNotAvailableError if the time slot is already taken", async () => {
    mockClientRepository.findClientByUserId.mockResolvedValue(clientMock);
    mockSpecialistRepository.findSpecialistsByID.mockResolvedValue(
      specialistMock,
    );
    mockAppointmentRepository.findAppointmentBySpecialististId.mockResolvedValue(
      appointmentMock,
    );

    await expect(
      service.createAppointment(
        "user-123",
        "spec-1",
        "2025-01-06",
        "09:00",
        "scheduler-1",
      ),
    ).rejects.toThrow(SlotNotAvailableError);
  });

  it("should throw SlotNotAvailableError if the time slot is not in availability", async () => {
    mockClientRepository.findClientByUserId.mockResolvedValue(clientMock);
    mockSpecialistRepository.findSpecialistsByID.mockResolvedValue(
      specialistMock,
    );
    mockAppointmentRepository.findAppointmentBySpecialististId.mockResolvedValue(
      null,
    );

    await expect(
      service.createAppointment(
        "user-123",
        "spec-1",
        "2025-01-06",
        "15:00",
        "scheduler-1",
      ),
    ).rejects.toThrow(SlotNotAvailableError);
  });

  it("should create appointment successfully", async () => {
    const appointmentDate = getNextMonday();
    const appointmentTime = "09:00";
    const appointmentDateTime = new Date(
      `${appointmentDate}T${appointmentTime}`,
    );

    mockClientRepository.findClientByUserId.mockResolvedValue(clientMock);
    mockSpecialistRepository.findSpecialistsByID.mockResolvedValue(
      specialistMock,
    );
    jest.spyOn(service, "checkAvailability").mockResolvedValue(true);
    mockAppointmentRepository.findAppointmentBySpecialististId.mockResolvedValue(
      null,
    );
    mockAppointmentRepository.createAppointment.mockResolvedValue(
      appointmentMock,
    );
    mockAuditLogRepository.createAuditLog = jest.fn();

    await service.createAppointment(
      "user-123",
      "spec-1",
      appointmentDate,
      appointmentTime,
      "scheduler-1",
    );

    expect(
      mockAppointmentRepository.createAppointment.mockName(
        "Create Appointment",
      ),
    ).toHaveBeenCalledWith(
      "client-1",
      "spec-1",
      "scheduler-1",
      appointmentDateTime,
      appointmentTime,
    );

    expect(
      mockAuditLogRepository.createAuditLog.mockName("Create Audit Log"),
    ).toHaveBeenCalledWith(
      "user-123",
      "appointment-1",
      appointmentDateTime,
      appointmentTime,
    );
  });
});

function getNextMonday(): string {
  const date = new Date();
  date.setDate(date.getDate() + ((8 - date.getDay()) % 7 || 7)); // next Monday
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}
