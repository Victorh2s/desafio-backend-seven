import { SpecialistRepository } from "src/shared/config/prisma/database/specialist-repository";
import { AuthRepository } from "src/shared/config/prisma/database/auth-repository";
import { SpecialistService } from "../../specialist.service";
import { RegisterSpecialistAvailabilityDto } from "../../dto/register-specialist-availability";
import { UserNotFoundError } from "../../../../../shared/errors/user-not-found.error";

const mockSpecialistRepository: jest.Mocked<SpecialistRepository> = {
  registerAvailability: jest.fn(),
};

const mockAuthRepository: jest.Mocked<AuthRepository> = {
  findUserById: jest.fn(),
  findUserByEmail: jest.fn(),
  registerUser: jest.fn(),
};

describe("SpecialistService", () => {
  let specialistService: SpecialistService;

  beforeEach(() => {
    jest.clearAllMocks();
    specialistService = new SpecialistService(
      mockSpecialistRepository,
      mockAuthRepository,
    );
  });

  describe("registerSpecialistAvailability", () => {
    const mockUserId = "user-uuid";
    const mockAvailabilityData: RegisterSpecialistAvailabilityDto = {
      specialty: "Cardiology",
      daily_limit: 10,
      min_interval_minutes: 30,
      availability: {
        monday: ["09:00", "10:00", "11:00"],
        tuesday: ["14:00", "15:00"],
      },
    };

    const mockUser = {
      id: mockUserId,
      name: "Dr. Specialist",
      email: "specialist@example.com",
      password: "hashed_password",
      role: "specialist" as const,
      priority: false,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    };

    it("should register availability successfully when user exists", async () => {
      const mockFindUserById =
        mockAuthRepository.findUserById.mockResolvedValue(mockUser);

      const mockRegisterAvailability =
        mockSpecialistRepository.registerAvailability.mockResolvedValue(
          undefined,
        );

      await specialistService.registerSpecialistAvailability(
        mockUserId,
        mockAvailabilityData,
      );

      expect(mockFindUserById).toHaveBeenCalledWith(mockUserId);
      expect(mockRegisterAvailability).toHaveBeenCalledWith(
        mockUserId,
        mockAvailabilityData,
      );
    });

    it("should throw UserNotFoundError when user does not exist", async () => {
      const mockFindUserById =
        mockAuthRepository.findUserById.mockResolvedValue(null);

      const mockRegisterAvailability =
        mockSpecialistRepository.registerAvailability.mockResolvedValue(
          undefined,
        );

      await expect(
        specialistService.registerSpecialistAvailability(
          "non-existent-uuid",
          mockAvailabilityData,
        ),
      ).rejects.toThrow(UserNotFoundError);

      expect(mockFindUserById).toHaveBeenCalledWith("non-existent-uuid");
      expect(mockRegisterAvailability).not.toHaveBeenCalled();
    });

    it("should propagate errors from specialist repository", async () => {
      const dbError = new Error("Database error");
      const mockFindUserById =
        mockAuthRepository.findUserById.mockResolvedValue(mockUser);
      const mockRegisterAvailability =
        mockSpecialistRepository.registerAvailability.mockRejectedValue(
          dbError,
        );

      await expect(
        specialistService.registerSpecialistAvailability(
          mockUserId,
          mockAvailabilityData,
        ),
      ).rejects.toThrow(dbError);

      expect(mockFindUserById).toHaveBeenCalledWith(mockUserId);
      expect(mockRegisterAvailability).toHaveBeenCalledWith(
        mockUserId,
        mockAvailabilityData,
      );
    });

    it("should call repository with correct parameters", async () => {
      mockAuthRepository.findUserById.mockResolvedValue(mockUser);
      const mockRegisterAvailability =
        mockSpecialistRepository.registerAvailability.mockResolvedValue(
          undefined,
        );

      const testData: RegisterSpecialistAvailabilityDto = {
        specialty: "Neurology",
        daily_limit: 5,
        min_interval_minutes: 60,
        availability: {
          wednesday: ["10:00", "14:00"],
          friday: ["09:00", "11:00"],
        },
      };

      await specialistService.registerSpecialistAvailability(
        mockUserId,
        testData,
      );

      expect(mockRegisterAvailability).toHaveBeenCalledWith(mockUserId, {
        specialty: "Neurology",
        daily_limit: 5,
        min_interval_minutes: 60,
        availability: {
          wednesday: ["10:00", "14:00"],
          friday: ["09:00", "11:00"],
        },
      });
    });
  });
});
