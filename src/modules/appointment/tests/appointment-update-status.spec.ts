import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { AppointmentService } from "../appointment.service";
import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { ClientRepository } from "src/shared/config/prisma/database/client-repository";
import { AuditLogRepository } from "src/shared/config/prisma/database/audit-log-repository";
import { AppointmentStatus, Role } from "../../../../prisma/generated";
import { NotFoundAppointmentError } from "../errors/not-found-appointment.error";
import { NotAuthorizationError } from "../../auth/errors/not-authorization.error";

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
  updateAppointmentStatus: jest.fn(),
  findAppointmentsForNotification: jest.fn(),
  findManyForScheduler: jest.fn(),
};

const mockClientRepository: jest.Mocked<ClientRepository> = {
  findClientByUserId: jest.fn(),
};

const mockAuditLogRepository: jest.Mocked<AuditLogRepository> = {
  createAuditLog: jest.fn(),
};

describe("AppointmentService - updateAppointmentStatus", () => {
  let service: AppointmentService;
  const mockAppointment = {
    id: "app-1",
    client_id: "client-1",
    specialist_id: "spec-1",
    scheduled_by_id: "scheduler-1",
    date: new Date(Date.now() + 7 * 60 * 60 * 1000),
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

  const mockSpecialistWithAppointments = {
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
      role: "specialist" as Role,
      priority: false,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
    appointments: [
      {
        id: "app-1",
        specialist_id: "spec-1",
        client_id: "client-1",
        scheduled_by_id: "scheduler-1",
        date: new Date("2025-05-26"),
        time: "10:00",
        status: "confirmed" as AppointmentStatus,
        created_at: new Date(),
        updated_at: new Date(),
        rescheduled_from_id: null,
      },
      {
        id: "app-2",
        specialist_id: "spec-1",
        client_id: "client-2",
        scheduled_by_id: "scheduler-1",
        date: new Date("2025-05-26"),
        time: "14:00",
        status: "pending" as AppointmentStatus,
        created_at: new Date(),
        updated_at: new Date(),
        rescheduled_from_id: null,
      },
    ],
  };
  const mockSpecialistWithAppointmentsError = {
    id: "spec-2",
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
      role: "specialist" as Role,
      priority: false,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
    appointments: [
      {
        id: "app-1",
        specialist_id: "spec-1",
        client_id: "client-1",
        scheduled_by_id: "scheduler-1",
        date: new Date("2025-05-26"),
        time: "10:00",
        status: "confirmed" as AppointmentStatus,
        created_at: new Date(),
        updated_at: new Date(),
        rescheduled_from_id: null,
      },
      {
        id: "app-2",
        specialist_id: "spec-1",
        client_id: "client-2",
        scheduled_by_id: "scheduler-1",
        date: new Date("2025-05-26"),
        time: "14:00",
        status: "pending" as AppointmentStatus,
        created_at: new Date(),
        updated_at: new Date(),
        rescheduled_from_id: null,
      },
    ],
  };
  it("should update status if user is admin", async () => {
    mockAppointmentRepository.findAppointmentById.mockResolvedValue(
      mockAppointment,
    );
    mockAppointmentRepository.updateAppointmentStatus.mockResolvedValue({
      ...mockAppointment,
      status: "completed" as AppointmentStatus,
    });

    const result = await service.updateAppointmentStatus(
      "app-1",
      AppointmentStatus.completed,
      "admin",
      "admin-user-id",
    );

    expect(result.status).toBe("completed");
    expect(
      mockAppointmentRepository.updateAppointmentStatus.mockName(
        "update Appointment Status",
      ),
    ).toHaveBeenCalledWith("app-1", AppointmentStatus.completed);
    expect(
      mockAuditLogRepository.createAuditLog.mockName("create AuditLog"),
    ).toHaveBeenCalledWith({
      userId: "admin-user-id",
      appointmentId: "app-1",
      message: "Appointment update status for completed",
    });
  });

  it("should update status if user is the specialist", async () => {
    mockAppointmentRepository.findAppointmentById.mockResolvedValue(
      mockAppointment,
    );
    mockSpecialistRepository.findSpecialistsByUserId.mockResolvedValue(
      mockSpecialistWithAppointments,
    );
    mockAppointmentRepository.updateAppointmentStatus.mockResolvedValue({
      ...mockAppointment,
      status: "completed" as AppointmentStatus,
    });

    const result = await service.updateAppointmentStatus(
      "app-1",
      AppointmentStatus.completed,
      "specialist",
      "user-456",
    );

    expect(result.status).toBe("completed");
    expect(
      mockAppointmentRepository.updateAppointmentStatus.mockName(
        "update Appointment Status",
      ),
    ).toHaveBeenCalled();
    expect(
      mockAuditLogRepository.createAuditLog.mockName("create AuditLog"),
    ).toHaveBeenCalled();
  });

  it("should throw NotFoundAppointmentError if appointment does not exist", async () => {
    mockAppointmentRepository.findAppointmentById.mockResolvedValue(null);

    await expect(
      service.updateAppointmentStatus(
        "non-existent",
        AppointmentStatus.confirmed,
        "admin",
        "id",
      ),
    ).rejects.toThrow(NotFoundAppointmentError);
  });

  it("should throw NotAuthorizationError if user is not admin and not related specialist", async () => {
    mockAppointmentRepository.findAppointmentById.mockResolvedValue(
      mockAppointment,
    );
    mockSpecialistRepository.findSpecialistsByUserId.mockResolvedValue(
      mockSpecialistWithAppointmentsError,
    );

    await expect(
      service.updateAppointmentStatus(
        "app-1",
        AppointmentStatus.completed,
        "specialist",
        "user-999",
      ),
    ).rejects.toThrow(NotAuthorizationError);
  });

  it("should throw NotAuthorizationError if user is not admin and no specialist is found", async () => {
    mockAppointmentRepository.findAppointmentById.mockResolvedValue(
      mockAppointment,
    );
    mockSpecialistRepository.findSpecialistsByUserId.mockResolvedValue(null);

    await expect(
      service.updateAppointmentStatus(
        "app-1",
        AppointmentStatus.completed,
        "specialist",
        "user-999",
      ),
    ).rejects.toThrow(NotAuthorizationError);
  });
});
