/* eslint-disable @typescript-eslint/unbound-method */
import { hash } from "bcryptjs";
import { RegisterDto } from "../../dto/register-user.dto";
import { AuthService } from "../../auth.service";
import { mockAuthRepository } from "../../../../shared/mocks/repositories.mock";

jest.mock("bcryptjs", () => ({
  hash: jest.fn().mockResolvedValue("hashed_password"),
}));

describe("AuthService - Register User", () => {
  let authService: AuthService;

  beforeEach(() => {
    jest.clearAllMocks();
    authService = new AuthService(mockAuthRepository);
  });

  it("should hash the password and call repository", async () => {
    const userData: RegisterDto = {
      name: "Test User",
      email: "test@example.com",
      password: "123456",
      role: "admin",
      phone: "11999999999",
    };

    await authService.registerUser(userData);

    expect(hash).toHaveBeenCalledWith(userData.password, 8);
    expect(mockAuthRepository.registerUser).toHaveBeenCalledWith({
      ...userData,
      password: "hashed_password",
    });
  });

  it("should throw an error if the repository fails", async () => {
    const userData: RegisterDto = {
      name: "Test User",
      email: "test@example.com",
      password: "123456",
      role: "admin",
      phone: "11999999999",
    };

    mockAuthRepository.registerUser.mockRejectedValue(
      new Error("Database error"),
    );

    await expect(authService.registerUser(userData)).rejects.toThrow(
      "Database error",
    );
  });

  it("should reject invalid email", async () => {
    const invalidUser = {
      name: "Test",
      email: "invalid",
      password: "123456",
      role: "admin" as const,
      phone: "11999999999",
    };
    await expect(authService.registerUser(invalidUser)).rejects.toThrow();
  });

  it("should reject if the email already exists in the system", async () => {
    const existingUser = {
      id: "uuid",
      name: "Existing User",
      email: "existing@example.com",
      password: "hashed_password",
      role: "admin" as const,
      priority: false,
      active: true,
      created_at: new Date(),
      updated_at: new Date(),
    };

    mockAuthRepository.findUserByEmail.mockResolvedValue(existingUser);

    const newUser: RegisterDto = {
      name: "New User",
      email: "existing@example.com",
      password: "123456",
      role: "admin",
      phone: "11999999999",
    };

    await expect(authService.registerUser(newUser)).rejects.toThrow(
      "Email already in use",
    );

    expect(mockAuthRepository.findUserByEmail).toHaveBeenCalledWith(
      newUser.email,
    );

    expect(mockAuthRepository.registerUser).not.toHaveBeenCalled();
  });
});
