import { AuthRepository } from "src/shared/config/prisma/database/auth-repository";
import { RegisterDto } from "./dto/register-user.dto";
import { hash } from "bcryptjs";
import { EmailAlreadyExistError } from "./errors/email-already-exist.error";

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async registerUser(user: RegisterDto) {
    const foundUserByEmail = await this.authRepository.findUserByEmail(
      user.email,
    );

    if (foundUserByEmail) throw new EmailAlreadyExistError();

    const passwordhash = await hash(user.password, 8);

    const newUser = {
      ...user,
      password: passwordhash,
    };
    return await this.authRepository.registerUser(newUser);
  }
}
