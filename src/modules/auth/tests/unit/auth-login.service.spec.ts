import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthService } from "../../auth.service";
import { LoginDto } from "../../dto/login.dto";
import { AuthInvalidError } from "../../errors/auth-invalid.error";
import { mockAuthRepository } from "../../../../shared/mocks/repositories.mock";

jest.mock("bcryptjs", () => ({
  hash: jest.fn().mockResolvedValue("hashed_password"),
  compare: jest.fn().mockResolvedValue(true),
}));

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn().mockReturnValue("mock_token"),
}));

describe("AuthService - Login", () => {
  let authService: AuthService;

  beforeEach(() => {
    jest.clearAllMocks();
    authService = new AuthService(mockAuthRepository);
  });

  describe("login", () => {
    const mockUser = {
      id: "user_uuid",
      name: "Test User",
      email: "test@example.com",
      password: "correct_password",
      role: "admin" as const,
      priority: false,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    };

    it("should return user data with token when credentials are valid", async () => {
      const mock =
        mockAuthRepository.findUserByEmail.mockResolvedValue(mockUser);
      const loginData: LoginDto = {
        email: "test@example.com",
        password: "correct_password",
      };

      const result = await authService.login(loginData);

      expect(mock).toHaveBeenCalledWith(loginData.email);
      expect(compare).toHaveBeenCalledWith(
        loginData.password,
        mockUser.password,
      );
      expect(result).toEqual({
        id: mockUser.id,
        name: mockUser.name,
        email: mockUser.email,
        token: "mock_token",
      });
    });

    it("should throw AuthInvalidError when user is not found", async () => {
      mockAuthRepository.findUserByEmail.mockResolvedValue(null);
      const loginData: LoginDto = {
        email: "nonexistent@example.com",
        password: "any_password",
      };

      await expect(authService.login(loginData)).rejects.toThrow(
        AuthInvalidError,
      );
    });

    it("should throw AuthInvalidError when password is incorrect", async () => {
      mockAuthRepository.findUserByEmail.mockResolvedValue(mockUser);
      (compare as jest.Mock).mockResolvedValue(false);
      const loginData: LoginDto = {
        email: "test@example.com",
        password: "wrong_password",
      };

      await expect(authService.login(loginData)).rejects.toThrow(
        AuthInvalidError,
      );
    });
  });

  describe("generateToken", () => {
    it("should generate a valid JWT token", () => {
      const userId = "user_uuid";
      process.env.JWT_SECRET = "test_secret";
      process.env.JWT_EXPIRES_IN = "1d";

      const token = authService["generateToken"](userId);

      expect(jwt.sign).toHaveBeenCalledWith({ id: userId }, "test_secret", {
        subject: userId,
        expiresIn: "1d",
      });
      expect(token).toBe("mock_token");
    });
  });
});
