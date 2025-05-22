import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { AppointmentService } from "../appointment.service";
import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { ClientRepository } from "src/shared/config/prisma/database/client-repository";
import { AuditLogRepository } from "src/shared/config/prisma/database/audit-log-repository";
import { AppointmentStatus, Role } from "prisma/generated";
import { LateCancellationError } from "../errors/late-cancellation.error";
import { NotFoundAppointmentError } from "../errors/not-found-appointment.error copy";

const mockSpecialistRepository: jest.Mocked<SpecialistRepository> = {
  findManySpecialistsBySpecialty: jest.fn(),
  registerAvailability: jest.fn(),
  findSpecialistsByID: jest.fn(),
  findSpecialistsByUserId: jest.fn(),
};

const mockAppointmentRepository: jest.Mocked<AppointmentRepository> = {
  findManyExistingAppointments: jest.fn(),
  createAppointment: jest.fn(),
  findAppointmentBySpecialististId: jest.fn(),
  findAppointmentById: jest.fn(),
  updateAppointmentForCancelled: jest.fn(),
};

const mockClientRepository: jest.Mocked<ClientRepository> = {
  findClientByUserId: jest.fn(),
};

const mockAuditLogRepository: jest.Mocked<AuditLogRepository> = {
  createAuditLog: jest.fn(),
};

describe("AppointmentService - cancelAppointment", () => {
  let service: AppointmentService;

  const mockAppointment = {
    id: "app-1",
    client_id: "client-1",
    specialist_id: "spec-1",
    scheduled_by_id: "scheduler-1",
    date: new Date(Date.now() + 7 * 60 * 60 * 1000), // 7 horas no futuro
    time: "14:00",
    status: "confirmed" as AppointmentStatus,
    created_at: new Date(),
    updated_at: new Date(),
    rescheduled_from_id: null,
    client: {
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
        role: "client" as Role,
        priority: false,
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    },
    specialist: {
      id: "spec-1",
      user_id: "user-456",
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
        id: "user-456",
        name: "Dr. Nutrition",
        email: "nutrition@example.com",
        password: "hashed",
        role: "specialist" as Role,
        priority: false,
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers().setSystemTime(new Date("2023-05-01T12:00:00Z"));
    service = new AppointmentService(
      mockSpecialistRepository,
      mockClientRepository,
      mockAppointmentRepository,
      mockAuditLogRepository,
    );
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should cancel appointment successfully when within deadline", async () => {
    mockAppointmentRepository.findAppointmentById.mockResolvedValue(
      mockAppointment,
    );
    mockAppointmentRepository.updateAppointmentForCancelled.mockResolvedValue({
      ...mockAppointment,
      status: "cancelled" as AppointmentStatus,
    });

    await service.cancelAppointment("app-1", "user-123");

    expect(
      mockAppointmentRepository.findAppointmentById.mockName(
        "find Appointment By Id",
      ),
    ).toHaveBeenCalledWith("app-1");
    expect(
      mockAppointmentRepository.updateAppointmentForCancelled.mockName(
        "update Appointment For Cancelled",
      ),
    ).toHaveBeenCalledWith("app-1");
    expect(
      mockAuditLogRepository.createAuditLog.mockName("create AuditLog"),
    ).toHaveBeenCalledWith({
      userId: "user-123",
      appointmentId: "app-1",
      message: "Appointment cancelled",
    });
  });

  it("should throw NotFoundAppointmentError when appointment not found", async () => {
    mockAppointmentRepository.findAppointmentById.mockResolvedValue(null);

    await expect(
      service.cancelAppointment("non-existent", "user-123"),
    ).rejects.toBeInstanceOf(NotFoundAppointmentError);
  });

  it("should throw LateCancellationError when cancelling less than 6 hours before", async () => {
    const now = new Date("2023-05-01T12:00:00Z");
    jest.useFakeTimers().setSystemTime(now);

    const appointmentDate = new Date(now.getTime() + 5 * 60 * 60 * 1000);
    const localTimeStr = appointmentDate
      .toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace("24:", "00:");

    const lateAppointment = {
      ...mockAppointment,
      date: appointmentDate,
      time: localTimeStr,
    };

    mockAppointmentRepository.findAppointmentById.mockResolvedValue(
      lateAppointment,
    );

    await expect(
      service.cancelAppointment("app-1", "user-123"),
    ).rejects.toThrow(LateCancellationError);

    jest.useRealTimers();
  });

  it("should allow cancellation exactly 6 hours before", async () => {
    const exactTimeAppointment = {
      ...mockAppointment,
      date: new Date(Date.now() + 6 * 60 * 60 * 1000),
      time: "18:00",
    };
    mockAppointmentRepository.findAppointmentById.mockResolvedValue(
      exactTimeAppointment,
    );
    mockAppointmentRepository.updateAppointmentForCancelled.mockResolvedValue({
      ...exactTimeAppointment,
      status: "cancelled" as AppointmentStatus,
    });

    await expect(
      service.cancelAppointment("app-1", "user-123"),
    ).resolves.not.toThrow();
  });

  it("should handle timezone differences correctly", async () => {
    const timezoneAppointment = {
      ...mockAppointment,
      date: new Date(Date.now() + 7 * 60 * 60 * 1000),
      time: "19:00",
    };
    mockAppointmentRepository.findAppointmentById.mockResolvedValue(
      timezoneAppointment,
    );
    mockAppointmentRepository.updateAppointmentForCancelled.mockResolvedValue({
      ...timezoneAppointment,
      status: "cancelled" as AppointmentStatus,
    });

    await service.cancelAppointment("app-1", "user-123");

    expect(
      mockAppointmentRepository.updateAppointmentForCancelled.mockName(
        "update Appointment For Cancelled",
      ),
    ).toHaveBeenCalled();
  });
});
