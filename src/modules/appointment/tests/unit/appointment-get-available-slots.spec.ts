import { Role } from "prisma/generated";
import { AppointmentService } from "../../appointment.service";
import { InvalidDataError } from "../../errors/invalid-data.error";
import { NotPossibleQueryPastDatesError } from "../../errors/not-possible-query-paste.error";
import { NotFoundSpecialistsBySpecialtyError } from "../../errors/not-found-specialists-by-specialty.error";
import {
  mockAppointmentRepository,
  mockAuditLogRepository,
  mockClientRepository,
  mockSpecialistRepository,
} from "../../../../shared/mocks/repositories.mock";

describe("AppointmentService", () => {
  let appointmentService: AppointmentService;

  const mockSpecialists = [
    {
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
    },
    {
      id: "spec-2",
      user_id: "user-2",
      specialty: "nutrition",
      daily_limit: 5,
      min_interval_minutes: 60,
      availability: JSON.stringify({
        monday: ["08:00", "09:00", "13:00"],
        tuesday: ["08:00", "09:00"],
        wednesday: ["08:00", "09:00"],
      }),
      created_at: new Date(),
      updated_at: new Date(),
      user: {
        id: "user-2",
        name: "Dr. Nutrition 2",
        email: "nutrition2@example.com",
        password: "hashed",
        role: "specialist" as Role,
        priority: false,
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    },
  ];

  const mockAppointments = [
    { id: "app-1", specialist_id: "spec-1", date: "2025-01-01", time: "10:00" },
    { id: "app-2", specialist_id: "spec-1", date: "2025-01-01", time: "14:00" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    appointmentService = new AppointmentService(
      mockSpecialistRepository,
      mockClientRepository,
      mockAppointmentRepository,
      mockAuditLogRepository,
    );
  });

  describe("getAvailableSlots", () => {
    it("should throw error for invalid date format", async () => {
      await expect(
        appointmentService.getAvailableSlots("invalid-date", "nutrition"),
      ).rejects.toBeInstanceOf(InvalidDataError);
    });

    it("should throw error for past dates", async () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const pastDate = yesterday.toLocaleDateString("en-CA");

      await expect(
        appointmentService.getAvailableSlots(pastDate, "nutrition"),
      ).rejects.toBeInstanceOf(NotPossibleQueryPastDatesError);

      expect(
        mockSpecialistRepository.findManySpecialistsBySpecialty.mockClear(),
      ).toHaveBeenCalledTimes(0);
    });

    it("should throw error when no specialists found", async () => {
      mockSpecialistRepository.findManySpecialistsBySpecialty.mockResolvedValue(
        [],
      );

      const currentDate = getCurrentDateFormatted();

      await expect(
        appointmentService.getAvailableSlots(currentDate, "nutrition"),
      ).rejects.toBeInstanceOf(NotFoundSpecialistsBySpecialtyError);
    });

    it("should return available slots for future date", async () => {
      const futureDate = new Date();
      futureDate.setFullYear(futureDate.getFullYear() + 1);
      const futureDateStr = futureDate.toISOString().split("T")[0];

      mockSpecialistRepository.findManySpecialistsBySpecialty.mockResolvedValue(
        [mockSpecialists[0]],
      );
      mockAppointmentRepository.findManyExistingAppointments.mockResolvedValue(
        mockAppointments,
      );

      const result = await appointmentService.getAvailableSlots(
        futureDateStr,
        "nutrition",
      );

      expect(result).toEqual(expect.any(Array));
    });

    it("should filter out specialists with no available times", async () => {
      const specialistWithNoAvailability = {
        ...mockSpecialists[0],
        availability: JSON.stringify({ monday: [] }),
      };

      mockSpecialistRepository.findManySpecialistsBySpecialty.mockResolvedValue(
        [specialistWithNoAvailability],
      );
      mockAppointmentRepository.findManyExistingAppointments.mockResolvedValue(
        [],
      );
      const currentDate = getCurrentDateFormatted();
      const result = await appointmentService.getAvailableSlots(
        currentDate,
        "nutrition",
      );

      expect(result.length).toBe(0);
    });
  });

  describe("getDayOfWeek", () => {
    it("should return correct day of week", () => {
      expect(appointmentService["getDayOfWeek"]("2025-05-18")).toBe("sunday");
      expect(appointmentService["getDayOfWeek"]("2025-05-19")).toBe("monday");
      expect(appointmentService["getDayOfWeek"]("2025-05-20")).toBe("tuesday");
    });
  });

  describe("isWithinIntervalLimits", () => {
    it("should return true when no interval restrictions", () => {
      expect(
        appointmentService["isWithinIntervalLimits"]("10:00", 0, ["09:00"]),
      ).toBe(true);
    });

    it("should return false when adjacent time is booked (before)", () => {
      expect(
        appointmentService["isWithinIntervalLimits"]("10:00", 30, ["09:30"]),
      ).toBe(false);
    });

    it("should return false when adjacent time is booked (after)", () => {
      expect(
        appointmentService["isWithinIntervalLimits"]("10:00", 30, ["10:30"]),
      ).toBe(false);
    });

    it("should return true when no adjacent times are booked", () => {
      expect(
        appointmentService["isWithinIntervalLimits"]("10:00", 30, [
          "09:00",
          "11:00",
        ]),
      ).toBe(true);
    });
  });

  describe("formatTime", () => {
    it("should format time correctly", () => {
      const date = new Date();
      date.setHours(9, 5, 0, 0);
      expect(appointmentService["formatTime"](date)).toBe("09:05");
    });

    it("should pad single digit hours and minutes", () => {
      const date = new Date();
      date.setHours(1, 2, 0, 0);
      expect(appointmentService["formatTime"](date)).toBe("01:02");
    });
  });
});

function getCurrentDateFormatted(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
