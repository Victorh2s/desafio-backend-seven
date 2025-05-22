import {
  mockAppointmentRepository,
  mockAuditLogRepository,
  mockClientRepository,
  mockSpecialistRepository,
} from "../../../../shared/mocks/repositories.mock";
import { AppointmentService } from "../../appointment.service";
import { NotFoundClientError } from "../../errors/not-found-client.error";
import { AppointmentStatus, Role } from "prisma/generated";

describe("AppointmentService", () => {
  let appointmentService: AppointmentService;

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

  beforeEach(() => {
    jest.clearAllMocks();
    appointmentService = new AppointmentService(
      mockSpecialistRepository,
      mockClientRepository,
      mockAppointmentRepository,
      mockAuditLogRepository,
    );
  });

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
