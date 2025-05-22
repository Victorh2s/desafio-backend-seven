import {
  mockAppointmentRepository,
  mockAuditLogRepository,
  mockClientRepository,
  mockSpecialistRepository,
} from "../../../../shared/mocks/repositories.mock";
import { AppointmentService } from "../../appointment.service";
import { NotFoundSpecialistError } from "../../errors/not-found-specialist.error";
import { AppointmentStatus, Role } from "prisma/generated";

describe("AppointmentService", () => {
  let appointmentService: AppointmentService;

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

  beforeEach(() => {
    jest.clearAllMocks();
    appointmentService = new AppointmentService(
      mockSpecialistRepository,
      mockClientRepository,
      mockAppointmentRepository,
      mockAuditLogRepository,
    );
  });

  describe("getSpecialistAppointments", () => {
    it("should return specialist appointments when specialist exists", async () => {
      // Arrange
      const userId = "user-1";
      mockSpecialistRepository.findSpecialistsByUserId.mockResolvedValue(
        mockSpecialistWithAppointments,
      );

      const result = await appointmentService.getSpecialistAppointments(userId);

      expect(
        mockSpecialistRepository.findSpecialistsByUserId.mockName(
          "find Specialists By UserId",
        ),
      ).toHaveBeenCalledWith(userId);
      expect(result).toEqual(mockSpecialistWithAppointments.appointments);
      expect(result.length).toBe(2);
    });

    it("should throw NotFoundSpecialistError when specialist does not exist", async () => {
      const userId = "non-existent-user";
      mockSpecialistRepository.findSpecialistsByUserId.mockResolvedValue(null);

      await expect(
        appointmentService.getSpecialistAppointments(userId),
      ).rejects.toThrow(NotFoundSpecialistError);
      expect(
        mockSpecialistRepository.findSpecialistsByUserId.mockName(
          "find Specialists By UserId",
        ),
      ).toHaveBeenCalledWith(userId);
    });

    it("should return empty array when specialist has no appointments", async () => {
      const userId = "user-1";
      const specialistWithoutAppointments = {
        ...mockSpecialistWithAppointments,
        appointments: [],
      };
      mockSpecialistRepository.findSpecialistsByUserId.mockResolvedValue(
        specialistWithoutAppointments,
      );

      const result = await appointmentService.getSpecialistAppointments(userId);

      expect(
        mockSpecialistRepository.findSpecialistsByUserId.mockName(
          "find Specialists By UserId",
        ),
      ).toHaveBeenCalledWith(userId);
      expect(result).toEqual([]);
    });
  });
});
