import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { AppointmentService } from "../appointment.service";
import { AppointmentRepository } from "src/shared/config/prisma/database/appointment-repository";
import { ClientRepository } from "src/shared/config/prisma/database/client-repository";
import { AuditLogRepository } from "src/shared/config/prisma/database/audit-log-repository";
import { NotFoundSpecialistError } from "../errors/not-found-specialist.error";
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
  findAppointmentById: jest.fn(),
  updateAppointmentForCancelled: jest.fn(),
  updateAppointmentStatus: jest.fn(),
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
