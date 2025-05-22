import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { AppointmentService } from "../appointment.service";
import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { ClientRepository } from "src/shared/config/prisma/database/client-repository";
import { AuditLogRepository } from "src/shared/config/prisma/database/audit-log-repository";
import { NotFoundClientError } from "../errors/not-found-client.error";
import { AppointmentStatus, Role } from "prisma/generated";

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
};

const mockClientRepository: jest.Mocked<ClientRepository> = {
  findClientByUserId: jest.fn(),
};

const mockAuditLogRepository: jest.Mocked<AuditLogRepository> = {
  createAuditLog: jest.fn(),
};

describe("AppointmentService", () => {
  let appointmentService: AppointmentService;

  beforeEach(() => {
    jest.clearAllMocks();
    appointmentService = new AppointmentService(
      mockSpecialistRepository,
      mockClientRepository,
      mockAppointmentRepository,
      mockAuditLogRepository,
    );
  });

  const mockClientWithAppointments = {
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
        client_id: "client-1",
        scheduled_by_id: "scheduler-1",
        date: new Date("2025-05-27"),
        time: "14:00",
        status: "pending" as AppointmentStatus,
        created_at: new Date(),
        updated_at: new Date(),
        rescheduled_from_id: null,
      },
    ],
  };

  describe("getClientAppointments", () => {
    it("should return client appointments when client exists", async () => {
      const userId = "user-123";
      mockClientRepository.findClientByUserId.mockResolvedValue(
        mockClientWithAppointments,
      );

      const result = await appointmentService.getClientAppointments(userId);

      expect(
        mockClientRepository.findClientByUserId.mockName(
          "find Client By UserId",
        ),
      ).toHaveBeenCalledWith(userId);
      expect(result).toEqual(mockClientWithAppointments.appointments);
      expect(result.length).toBe(2);
    });

    it("should throw NotFoundClientError when client does not exist", async () => {
      const userId = "non-existent-user";
      mockClientRepository.findClientByUserId.mockResolvedValue(null);

      await expect(
        appointmentService.getClientAppointments(userId),
      ).rejects.toThrow(NotFoundClientError);
      expect(
        mockClientRepository.findClientByUserId.mockName(
          "find Client By UserId",
        ),
      ).toHaveBeenCalledWith(userId);
    });

    it("should return empty array when client has no appointments", async () => {
      const userId = "user-123";
      const clientWithoutAppointments = {
        ...mockClientWithAppointments,
        appointments: [],
      };
      mockClientRepository.findClientByUserId.mockResolvedValue(
        clientWithoutAppointments,
      );

      const result = await appointmentService.getClientAppointments(userId);

      expect(
        mockClientRepository.findClientByUserId.mockName(
          "find Client By UserId",
        ),
      ).toHaveBeenCalledWith(userId);
      expect(result).toEqual([]);
    });

    it("should return appointments with correct structure", async () => {
      const userId = "user-123";
      mockClientRepository.findClientByUserId.mockResolvedValue(
        mockClientWithAppointments,
      );

      const result = await appointmentService.getClientAppointments(userId);

      expect(result[0]).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          specialist_id: expect.any(String),
          client_id: expect.any(String),
          date: expect.any(Date),
          time: expect.any(String),
          status: expect.stringMatching(
            /pending|confirmed|cancelled|completed|rescheduled|expired/,
          ),
          created_at: expect.any(Date),
          updated_at: expect.any(Date),
        }),
      );
    });
  });
});
